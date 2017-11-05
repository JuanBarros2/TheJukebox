import { Music } from './music';
import { Injectable } from '@angular/core';

@Injectable()
export class MusicService {

  musics: Music[];

  constructor() { }

  addMusic(music: Music): boolean {
    this.musics.push(music);
    return true;
  }


}
