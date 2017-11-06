import { DoubleMusicError } from './../exception/double-music-error';
import { DoubleAlbumError } from '../exception/double-album-error';
import { Album } from './../album/album';
import { Music } from './music';
import { Injectable } from '@angular/core';

@Injectable()
export class MusicService {

  albuns: any = {};

  constructor() {
    this.albuns = {};
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
}
