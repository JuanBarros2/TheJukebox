import { Music } from '../music/music';
import { Album } from './album';
import { Injectable } from '@angular/core';

@Injectable()
export class AlbumService {

  albuns: Album[];

  constructor() { }

  addAlbum(album: Album): boolean {
    this.albuns.push(album);
    return true;
  }

  canAddMusic(music: Music, album: Album): boolean {
    let result = false;

    if (album != null) {
      const index = this.albuns.indexOf(album);
      if (index === -1) {
        result = true;
      } else {
        result = this.albuns[index].hasMusic(music);
      }
    }
    return result;
  }
}
