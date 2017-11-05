import { Album } from './album/album';
import { Music } from './music/music';
import { Artist } from './artist/artist';
import { ArtistsService } from './artist/artists.service';
import { AlbumService } from './album/album.service';
import { MusicService } from './music/music.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FacadeService {

  constructor(private musicService: MusicService, private albumService: AlbumService, private artistService: ArtistsService) {
  }

  addArtist(artist: Artist) {
    this.artistService.addArtist(artist);
  }

  getArtists(): Artist[] {
    return this.artistService.getArtists();
  }

}
