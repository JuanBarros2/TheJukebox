import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ServerService } from './../server.service';
import { Music } from './../music/music';
import { DoublePlaylistError } from './../exception/double-playlist-error';
import { Playlist } from './playlist';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlaylistService {

  playlists = new Map<string, Playlist>();

  constructor(private http: HttpClient, private api: ServerService) {
    this.http.get(this.api.getUrlBase() + "playlist/list")
      .pipe(catchError(this.api.handleError))
      .toPromise().then((dado) => dado.forEach(element => {
        const newer = new Playlist(element.name);
        element.musics.forEach(music => {
          newer.addMusic(new Music(music.name, music.artist.name, music.year, music.duration, music.album));
        });
        this.playlists[element.name] = newer}));
  }

  getPlaylists(): Playlist[] {
    const result = [];
    for (const index of Object.keys(this.playlists)) {
      result.push(this.playlists[index]);
    }
    return result;
  }

  addPlaylist(playlist: Playlist): Observable<any> {
      if (playlist) {
        if (this.playlists[playlist.name]) {
          throw new DoublePlaylistError();
        } else {
          const tempPlaylist = {"name" : playlist.name};
          const obs = this.http.post(this.api.getUrlBase() + "playlist/add",
          JSON.stringify(tempPlaylist),
          this.api.getOptions())
            .pipe(catchError(this.api.handleError));
          obs.subscribe((dado) => this.playlists[playlist.name] = new Playlist(playlist.name));
          return obs;
        }
    }
  }

  removePlaylist(name: string) {
    if (name) {
      const tempPlaylist = {"name" : name};
      const obs = this.http.post(this.api.getUrlBase() + "playlist/remove",
      JSON.stringify(tempPlaylist),
      this.api.getOptions())
        .pipe(catchError(this.api.handleError));
      obs.subscribe((dado) => delete this.playlists[name]);
      return obs;
    }
  }

  addMusicInPlaylist(name: string, music: Music): Observable<any> {
    if (name && music) {
      let playlist = new Playlist(name);
      playlist.addMusic(music);
      const tempPlaylist = {"name" : playlist.name};
      tempPlaylist["musics"] = [music];
      console.log(JSON.stringify(tempPlaylist));
      const obs = this.http.post(this.api.getUrlBase() + "playlist/add/music",
      JSON.stringify(tempPlaylist),
      this.api.getOptions())
        .pipe(catchError(this.api.handleError));

      obs.subscribe((dado) => {
        playlist = this.playlists[name];
        playlist.addMusic(music)
      });
      return obs;
    }
  }

  removeMusicInPlaylist(name: string, music: Music) {
    if (name && music) {
      const tempPlaylist = {"name" : name};
      tempPlaylist["musics"] = [music];
      const obs = this.http.post(this.api.getUrlBase() + "playlist/remove/music",
      JSON.stringify(tempPlaylist),
      this.api.getOptions())
        .pipe(catchError(this.api.handleError));
      obs.subscribe((dado) => this.playlists[name].deleteMusic(music));
      return obs;
    }
    
  }

}
