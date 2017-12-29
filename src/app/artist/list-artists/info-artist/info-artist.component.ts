import { ArtistsService } from './../../artists.service';
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

  constructor(private musicService: MusicService, private artistService: ArtistsService) {

  }

  ngOnInit() {
    this.albums = this.getAlbuns(this.artist);
    this.musics = this.getMusics(this.albums, this.artist);
  }

  favoriteArtist(artist: Artist) {
    if (artist.favorite === true) {
      const r = confirm('Tem certeza que quer desfavoritar o artista?');
      if (r) {
          this.artistService.favoriteArtist(artist);
      }
    } else {
      this.artistService.favoriteArtist(artist);
    }
  }

  private getAlbuns(artist: Artist): Album[] {
    return this.musicService.getAlbuns(artist);
  }

  private getMusics(albums: Album[], artist: Artist): Music[] {
    const resultMusics = [];
    for (const album of albums) {
      for (const indexMusic of Object.keys(album.musicSet)) {
        const music = album.musicSet[indexMusic];
        if (music.artist.name.toUpperCase() === artist.name.toUpperCase()) {
          resultMusics.push(music);
        }
      }
    }
    return resultMusics;
  }

}
