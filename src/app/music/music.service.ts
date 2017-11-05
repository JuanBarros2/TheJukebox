import { DoubleMusicError } from './../exception/double-music-error';
import { DoubleAlbumError } from '../exception/double-album-error';
import { Album } from './../album/album';
import { Music } from './music';
import { Injectable } from '@angular/core';

@Injectable()
export class MusicService {

  albuns: Album[];

  constructor() { }

  addMusic(form) {
    const album = form.album;
    const artist = form.artist;

    console.log(form);
    if (this.existsAlbum(album)) {
      if (this.albuns[album.name].hasMusic(form)) {
        throw new DoubleMusicError();
      } else {
        this.albuns[album.name].addMusic(form);
      }
    } else {
      this.albuns[album.name] = new Album(form.album);
      this.albuns[album.name].addMusic(form);
    }
  }

  private existsAlbum(album): boolean {
    for (const aux of this.albuns){
      if (aux.name.toUpperCase() === album.name.toUpperCase()) {
        return true;
      }
    }
    return false;
  }


}
