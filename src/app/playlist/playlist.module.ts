import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ],
  declarations: [
    PlaylistComponent
  ],
  exports: [ PlaylistComponent ]
})
export class PlaylistModule { }
