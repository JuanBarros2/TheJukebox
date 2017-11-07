import { Music } from './../music/music';

export class Album {

  name: string;
  musics = new Map<string, Music>();

  constructor(name: string) {
    this.name = name;
  }

  hasMusic(music: string): boolean {
    return (music) && this.musics[music];
  }

  addMusic(music: Music) {
    this.musics[music.name] = music;
  }
}
