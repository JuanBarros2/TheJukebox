import { PlaylistService } from './../playlist.service';
import { Playlist } from '../playlist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-playlist',
  templateUrl: './list-playlist.component.html',
  styleUrls: ['./list-playlist.component.css']
})
export class ListPlaylistComponent implements OnInit {

  playlists: Playlist[];

  constructor(private playlistService: PlaylistService) { }

  ngOnInit() {
  }

  buildPlaylist() {
    this.playlists = this.playlistService.getPlaylists();
    return this.playlists;
  }

  getID(playlist: Playlist) {
    return playlist.name.toLowerCase().concat('Id').replace(' ', '');
  }

  removePlaylist(playlist: Playlist) {
    const r = confirm('Tem certeza que quer remover a playlist?');
    if (r) {
      this.playlistService.removePlaylist(playlist.name);
    }
  }

  removeMusicPlaylist(playlist, music) {
    const r = confirm('Tem certeza que quer remover essa música da playlist?');
    if (r) {
      this.playlistService.removeMusicInPlaylist(playlist.name, music);
    }
  }


}
