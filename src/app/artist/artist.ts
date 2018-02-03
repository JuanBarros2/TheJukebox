import { Music } from '../music/music';
export class Artist {
  name: string;
  photo: string;
  favorite: boolean;
  public rating: any;
  lastMusic: Music;

  constructor(name: string, photo: string) {
    this.name = name;
    this.photo = photo;
    this.favorite = false;
  }
}
