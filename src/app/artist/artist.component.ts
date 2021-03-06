import { Artist } from './artist';
import { Component, OnInit } from '@angular/core';

import { ArtistsService } from './artists.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  query: string;

  constructor() {
  }

  ngOnInit() {
  }

  changeParameter(event) {
    this.query = event.query;
  }

}
