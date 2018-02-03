import { Music } from './../music/music';
import { catchError } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ServerService } from './../server.service';
import { AuthService } from './../auth/auth.service';
import { DoubleArtistError } from './../exception/double-artist-error';
import { Artist } from './artist';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

@Injectable()
export class ArtistsService {

  artists: Artist[] = [];
  private headers = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private api: ServerService ) {
      this.http.get(this.api.getUrlBase() + 'artist/list')
      .pipe(catchError(this.api.handleError))
      .subscribe((dado) => dado.forEach(element => {
        const artist = new Artist(element.name, element.photo);
        artist.favorite = element.favorite;
        artist.lastMusic = element.lastMusic;
        artist.rating = element.rating;
        this.artists.push(artist);
      }));
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

  downArtists():Observable<any>{
    const obs = this.http.get(this.api.getUrlBase()+"artist/list")
      .pipe(catchError(this.api.handleError));
    obs.subscribe((dado) => dado.forEach(element => {
        this.artists.push(new Artist(element.name, element.photo));
      }));
    return obs;
  }

  addArtist(artist: Artist) {
    if (artist != null) {
      for (let i = 0; i < this.artists.length; i++) {
        if (artist.name.toUpperCase() === this.artists[i].name.toUpperCase()) {
          throw new DoubleArtistError();
        }
      }
      const obs = this.http.post(this.api.getUrlBase()+"artist/add",
                          JSON.stringify(artist),
                          this.api.getOptions());
      obs.subscribe((dado) =>  this.artists.push(artist));
      return obs;
     ;
    }
  }

  removeArtist(artist: Artist) {
    const index = this.artists.indexOf(artist);
    delete this.artists[index];
  }

  favoriteArtist(artist: Artist): Observable<any>{
    const obs = this.http.put(this.api.getUrlBase()+"artist/favorite",
      JSON.stringify(artist), this.api.getOptions())
      .pipe(catchError(this.api.handleError));
    obs.subscribe((dado) => artist.favorite = !artist.favorite);
    return obs;
  }

  lastMusic(music: Music, artist: Artist): Observable<any>{
    let newer = new Artist(artist.name, null);
    newer.lastMusic = music;

    const obs = this.http.post(this.api.getUrlBase()+"artist/lastMusic",
    JSON.stringify(newer), this.api.getOptions())
    .pipe(catchError(this.api.handleError));
    obs.subscribe((dado) => artist.lastMusic = music);
    return obs;
  }

  rating(artist: Artist): Observable<any>{
    const obs = this.http.put(this.api.getUrlBase()+"artist/rating",
      JSON.stringify(artist), this.api.getOptions())
      .pipe(catchError(this.api.handleError));
    obs.subscribe((dado) => artist.rating = dado.rating);
    return obs;

  }
}
