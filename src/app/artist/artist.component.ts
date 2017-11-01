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
    for ( let i = 0; i <= 10; i++) {
      this.artists.push(new Artist('SOnin', 'aa'));
    }
  }

  ngOnInit() {
  }

}
