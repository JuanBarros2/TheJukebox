import { Music } from './../../../music/music';
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
  musics: Music[];

  constructor(private musicService: MusicService) {

  }

  ngOnInit() {
    this.albums = this.getAlbuns(this.artist);
    this.musics = this.getMusics(this.albums, this.artist);
  }

  favoriteArtist(artist: Artist) {
    artist.favorite = !artist.favorite;
  }

  private getAlbuns(artist: Artist): Album[] {
    return this.musicService.getAlbuns(artist);
  }

  private getMusics(albums: Album[], artist: Artist): Music[] {
    const resultMusics = [];
    for (const album of albums) {
      for (const indexMusic of Object.keys(album.musics)) {
        const music = album.musics[indexMusic];
        if (music.artist.toUpperCase() === artist.name.toUpperCase()) {
          resultMusics.push(music);
        }
      }
    }
    return resultMusics;
  }

}
