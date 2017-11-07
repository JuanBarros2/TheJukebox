import { DoubleArtistError } from './../exception/double-artist-error';
import { Artist } from './artist';
import { Injectable } from '@angular/core';

@Injectable()
export class ArtistsService {

  artists: Artist[] = [ new Artist('Roberto Carlos', `http://static.heloisatolipan.com.br/imagens//2016/12/roberto-carlos.jpg`),
  new Artist('Maria Rita', `https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/9/7/d/f/97dfdeae9628304dfaf094f142207434.jpg`)
];

  constructor() {
  }

  getArtists(number?, query?) {
    let artists = this.artists;
    if (query) {
      artists = artists.filter( (artist) => artist.name.toUpperCase().includes(query.toUpperCase()));
    }
    const lenght = artists.length;
    if (number < lenght) {
      artists = artists.slice((-1) * number);
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
