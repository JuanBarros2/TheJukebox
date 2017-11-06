import { DoubleArtistError } from './../exception/double-artist-error';
import { Artist } from './artist';
import { Injectable } from '@angular/core';

@Injectable()
export class ArtistsService {

  artists: Artist[] = [];

  constructor() {
  }

  getArtists(number?, query?) {
    const lenght = this.artists.length ;
    let artists = number < lenght ? this.artists.slice((-1) * number) : this.artists;
    if (query) {
      artists = artists.filter( (artist) => artist.name.toUpperCase().includes(query.toUpperCase()));
    }
    return artists;
  }

  addArtist(artist: Artist) {
    if (artist != null) {
      for (let i = 0; i < this.artists.length; i++) {
        if (artist.name.toUpperCase() === this.artists[i].name.toUpperCase()) {
          throw new DoubleArtistError();
        }
      }
      this.artists.push(artist);
    }
  }

  removeArtist(artist: Artist) {
    const index = this.artists.indexOf(artist);
    delete this.artists[index];
  }

}
