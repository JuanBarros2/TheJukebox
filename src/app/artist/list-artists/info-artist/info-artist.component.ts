import { MusicService } from '../../../music/music.service';
import { Album } from './../../../album/album';
import { Artist } from '../../artist';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-artist',
  templateUrl: './info-artist.component.html',
  styleUrls: ['./info-artist.component.css']
})
export class InfoArtistComponent implements OnInit {

  @Input() artist: Artist;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

  favoriteArtist(artist: Artist) {
    artist.favorite = !artist.favorite;
  }

  getAlbuns(artist: Artist): Album[] {
    this.musicService.getAlbuns(artist);
    return null;
  }

}
