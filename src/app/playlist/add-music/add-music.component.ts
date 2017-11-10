import { Route, Router } from '@angular/router';
import { Playlist } from '../playlist';
import { Music } from '../../music/music';
import { PlaylistService } from './../playlist.service';
import { MusicService } from './../../music/music.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {

  musics: Music[];
  playlists: Playlist[];

  playlist: Playlist;
  music: Music;

  constructor(private musicService: MusicService, private playlistService: PlaylistService, private route: Router) { }

  ngOnInit() {
    this.musics = this.musicService.getMusics();
    this.playlists = this.playlistService.getPlaylists();
  }

  submitMethod(form) {
    this.playlistService.addMusicInPlaylist(form.value.playlist.name, form.value.music);
    this.route.navigate(['playlists']);
  }

}
