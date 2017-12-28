import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ServerService } from './../server.service';
import { Http } from '@angular/http';
import { AuthService } from './../auth/auth.service';
import { DoubleArtistError } from './../exception/double-artist-error';
import { Artist } from './artist';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

@Injectable()
export class ArtistsService {

  artists: Artist[] = [];
  private headers = new HttpHeaders();

  constructor(private authService: AuthService,
    private http: Http,
    private api: ServerService ) {
      this.http.get(this.api.getUrlBase() + "artist/list", this.authService.getAuthentication({headers:this.headers}))
      .map((res:Response) => res.json());
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
      const obs = this.http.post(this.api.getUrlBase() + "artist/add", this.authService.getAuthentication({headers:this.headers}));
      obs.subscribe((dado) =>  this.artists.push(artist));
      return obs;
     ;
    }
  }

  removeArtist(artist: Artist) {
    const index = this.artists.indexOf(artist);
    delete this.artists[index];
  }

}
