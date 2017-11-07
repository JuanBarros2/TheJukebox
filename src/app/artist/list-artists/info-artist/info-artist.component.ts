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
  albums: Album[];

  constructor(private musicService: MusicService) {

  }

  ngOnInit() {
    this.albums = this.getAlbuns(this.artist);
  }

  favoriteArtist(artist: Artist) {
    artist.favorite = !artist.favorite;
  }

  getAlbuns(artist: Artist): Album[] {
    return this.musicService.getAlbuns(artist);
  }

}
