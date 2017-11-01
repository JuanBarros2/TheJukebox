import { Artist } from './artist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artists: Artist[] = [];

  constructor() {
    this.artists.push(new Artist('SOnin', 'aa'));
    this.artists.push(new Artist('SOnin', 'aa'));
    this.artists.push(new Artist('SOnin', 'aa'));
  }

  ngOnInit() {
  }

}
