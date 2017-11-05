import { Artist } from '../artist';
import { ArtistsService } from '../artists.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {

  artists: Artist[] = [];

  constructor(private artistsService: ArtistsService) {
    this.artists = artistsService.getArtists();
  }

  ngOnInit() {
  }

}
