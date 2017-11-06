import { DoubleArtistError } from './../exception/double-artist-error';
import { Artist } from './artist';
import { Injectable } from '@angular/core';

@Injectable()
export class ArtistsService {

  artists: Artist[] = [];

  constructor() {
  }

  getArtists() {
    return this.artists.sort();
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
