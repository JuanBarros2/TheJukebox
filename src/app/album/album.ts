import { Music } from '../music/music';

export class Album {

  name: string;
  musics: Music[];

  constructor(name: string) {
    this.name = name;
  }

  hasMusic(music: Music): boolean {
    return (music != null && this.musics.indexOf(music) !== -1);
  }
}
