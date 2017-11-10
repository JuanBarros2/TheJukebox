import { MusicService } from './../music/music.service';
import { PlaylistService } from './playlist.service';
import { UtilModule } from '../util/util.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPlaylistComponent } from './add-playlist/add-playlist.component';
import { ListPlaylistComponent } from './list-playlist/list-playlist.component';
import { AddMusicComponent } from './add-music/add-music.component';

@NgModule({
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    UtilModule
  ],
  declarations: [
    PlaylistComponent,
    AddPlaylistComponent,
    ListPlaylistComponent,
    AddMusicComponent
  ],
  providers: [ PlaylistService, MusicService ],
  exports: [ PlaylistComponent ]
})
export class PlaylistModule { }
