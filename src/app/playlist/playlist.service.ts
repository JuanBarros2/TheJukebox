import { Music } from './../music/music';
import { DoublePlaylistError } from './../exception/double-playlist-error';
import { Playlist } from './playlist';
import { Injectable } from '@angular/core';

@Injectable()
export class PlaylistService {

  playlists = new Map<string, Playlist>();

  constructor() { }

  getPlaylists(): Playlist[] {
    const result = [];
    for (const index of Object.keys(this.playlists)) {
      result.push(this.playlists[index]);
    }
    return result;
  }

  addPlaylist(playlist: Playlist) {
      if (playlist) {
        if (this.playlists[playlist.name]) {
          throw new DoublePlaylistError();
        } else {
          this.playlists[playlist.name] = new Playlist(playlist.name);
        }
    }
  }

  removePlaylist(name: string) {
    if (name) {
      this.playlists.delete(name);
    }
  }

  addMusicInPlaylist(name: string, music: Music) {
    if (name && music) {
      const playlist = this.playlists[name];
      playlist.addMusic(music);
    }
  }

  removeMusicInPlaylist(name: string, music: Music) {
    this.playlists.get(name).deleteMusic(music);
  }

}
