import { Artist } from './artist';
import { Injectable } from '@angular/core';

@Injectable()
export class ArtistsService {

  artists: Artist[] = [];

  constructor() {
  }

  getArtists() {
    return this.artists;
  }

  addArtist(artist: Artist) {
    this.artists.push(artist);
  }

  removeArtist(artist: Artist) {
    const index = this.artists.indexOf(artist);
    delete this.artists[index];
  }
}
