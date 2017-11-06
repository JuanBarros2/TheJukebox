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
}
