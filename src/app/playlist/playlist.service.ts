import { Playlist } from './playlist';
import { Injectable } from '@angular/core';

@Injectable()
export class PlaylistService {

  playlists: Playlist[];

  constructor() { }

}
