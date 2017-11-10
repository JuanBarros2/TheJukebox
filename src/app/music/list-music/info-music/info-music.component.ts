import { Music } from '../../music';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-music',
  templateUrl: './info-music.component.html',
  styleUrls: ['./info-music.component.css']
})
export class InfoMusicComponent implements OnInit {

  @Input() music: Music;

  constructor() { }

  ngOnInit() {
  }

}
