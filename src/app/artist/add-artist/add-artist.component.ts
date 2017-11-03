import { ArtistsService } from './../artists.service';
import { Artist } from '../artist';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {

  artist: Artist = new Artist('', '');

  constructor(private artistsService: ArtistsService) {}

  ngOnInit() {
  }

  addArtist(artist: Artist) {
    this.artistsService.addArtist(artist);
  }

  onSubmit(form) {
    console.log(form);
    this.addArtist(new Artist(form.value.name, form.value.photo));
  }

  searchName(name) {
    console.log(name);
  }
}
