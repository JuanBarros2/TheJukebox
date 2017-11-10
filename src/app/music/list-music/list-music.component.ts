import { Album } from '../../album/album';
import { Music } from '../music';
import { MusicService } from './../music.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.css']
})
export class ListMusicComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

  getMusics(): Music[] {
    const albums = this.musicService.getAlbuns();
    const musics = new Array<Music>();
    for (const album of albums){
      for (const key of Object.keys(album.musics)){
        musics.push(album.musics[key]);
      }
    }
    return musics;
  }
}
