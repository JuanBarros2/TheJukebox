export class Artist {
  name: string;
  photo: string;
  favorite: boolean;
  rating: any;

  constructor(name: string, photo: string) {
    this.name = name;
    this.photo = photo;
    this.favorite = false;
  }
}
