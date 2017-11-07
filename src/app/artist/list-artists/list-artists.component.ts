import { MusicService } from './../../music/music.service';
import { Artist } from './../artist';
import { ArtistsService } from '../artists.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {

  @Input() queryParameter: string;
  @Input() quantity: number;

  artists: Artist[];

  constructor(private artistsService: ArtistsService, private musicService: MusicService) {
  }

  ngOnInit() {
  }

  buildArtists() {
    this.artists = this.artistsService.getArtists(this.quantity, this.queryParameter);
    return this.artists;
  }



}
