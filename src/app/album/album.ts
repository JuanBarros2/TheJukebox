import { Music } from './../music/music';

export class Album {

  name: string;
  musicSet = new Map<string, Music>();

  constructor(name: string) {
    this.name = name;
  }

  hasMusic(music: string): boolean {
    return (music) && this.musicSet[music];
  }

  addMusic(music: Music) {
    this.musicSet[music.name] = music;
  }
}
