import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicComponent } from './music.component';
import { AddMusicComponent } from './add-music/add-music.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddMusicComponent, MusicComponent],
  exports: [AddMusicComponent, MusicComponent]
})
export class MusicModule { }
