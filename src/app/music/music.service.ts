import { Artist } from '../artist/artist';
import { DoubleMusicError } from './../exception/double-music-error';
import { DoubleAlbumError } from '../exception/double-album-error';
import { Album } from './../album/album';
import { Music } from './music';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerService } from '../server.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MusicService {

  albuns = new Map<string, Album>();

  constructor(private http: HttpClient, private api: ServerService) {
    this.http.get(this.api.getUrlBase() + "album/list")
      .pipe(catchError(this.api.handleError))
      .toPromise().then((dado) => dado.forEach(element => {
        this.albuns[element.name] = element}));
  }

  addMusic(form) {
    const album = form.album;
    const artist = form.artist;

    const tempAlbum = new Album(album);
    if (this.existsAlbum(album)) {
      console.log('Album já existe');
      if (this.albuns[album].hasMusic(form.name)) {
        console.log('Música já existe');
        throw new DoubleMusicError();
      }
    }
    const music = new Music(form.name, artist, form.year, form.duration);
    tempAlbum.addMusic(music);
    this.http.post(this.api.getUrlBase() + "album/add/music",
                  JSON.stringify(music), 
                  this.api.getOptions())
      .pipe(this.api.handleError).subscribe((dado)=>this.albuns[album]= tempAlbum);
  }

  private existsAlbum(album): boolean {
    return this.albuns[album] != null;
  }

  getAlbuns(artist?: Artist): Album[] {
    const albuns = this.albuns;
    const resultAlbuns = [];
    if (artist) {
      for (const indexAlbum of Object.keys(albuns)) {
        for (const indexMusic of Object.keys(albuns[indexAlbum].musicSet)) {
          const music = albuns[indexAlbum].musicSet[indexMusic];
          if (music ? music.artist.name.toUpperCase() === artist.name.toUpperCase() : false ) {
            resultAlbuns.push(albuns[indexAlbum]);
            break;
          }
        }
      }
    } else {
      for (const indexAlbum of Object.keys(albuns)) {
         resultAlbuns.push(albuns[indexAlbum]);
      }
    }
    return resultAlbuns;
  }

  getMusics(): Music[] {
    const albums = this.getAlbuns();
    const musics = new Array<Music>();
    for (const album of albums){
      for (const key of Object.keys(album.musicSet)){
        musics.push(album.musicSet[key]);
      }
    }
    return musics;
  }
}
