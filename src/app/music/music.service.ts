import { Artist } from '../artist/artist';
import { DoubleMusicError } from './../exception/double-music-error';
import { DoubleAlbumError } from '../exception/double-album-error';
import { Album } from './../album/album';
import { Music } from './music';
import { Injectable } from '@angular/core';

@Injectable()
export class MusicService {

  albuns = new Map<string, Album>();

  constructor() {
    this.albuns['Hambug'] = new Album('hambum');
    this.albuns['Hambug'].addMusic(new Music('Estrada', 'Roberto Carlos', 1989, '3 min'));
  }

  addMusic(form) {
    const album = form.album;
    const artist = form.artist;

    if (!this.existsAlbum(album)) {
      console.log('Criando album');
      this.albuns[album] = new Album(album);
    } else {
      console.log('Album já existe');
      if (this.albuns[album].hasMusic(form.name)) {
        console.log('Música já existe');
        throw new DoubleMusicError();
      }
    }
    console.log('Adicionando música');
    const music = new Music(form.name, artist, form.year, form.duration);
    this.albuns[album].addMusic(music);
  }

  private existsAlbum(album): boolean {
    return this.albuns[album] != null;
  }

  getAlbuns(artist?: Artist): Album[] {
    const albuns = this.albuns;
    const resultAlbuns = [];
    if (artist) {
      for (const indexAlbum of Object.keys(albuns)) {
        for (const indexMusic of Object.keys(albuns[indexAlbum].musics)) {
          const music = albuns[indexAlbum].musics[indexMusic];
          if (music ? music.artist.toUpperCase() === artist.name.toUpperCase() : false ) {
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
}
