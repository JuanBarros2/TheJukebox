import { Album } from './../album/album';
import { Artist } from './../artist/artist';
export class Music {
  name: string;
  artist: string;
  year: number;
  duration: string;

  constructor(name: string, artist: string, year: number, duration: string) {
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.duration = duration;
  }


}
