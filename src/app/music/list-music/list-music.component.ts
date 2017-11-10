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
    return this.musicService.getMusics();
  }
}
