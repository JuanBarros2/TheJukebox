import { Music } from '../music/music';
export class Playlist {
  name: string;
  musics: Music[];

  constructor(name: string) {
    this.name = name;
    this.musics = new Array<Music>();
  }

  addMusic(music: Music) {
    if (music) {
      this.musics.push(music);
    }
  }

  deleteMusic(music: Music) {
    const index = this.musics.findIndex((value) => value.name.toUpperCase() === music.name.toUpperCase());
    if (index !== -1) {
      this.musics.splice(index, 1);
    }
  }
}
