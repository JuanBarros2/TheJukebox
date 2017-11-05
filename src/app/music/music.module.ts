import { UtilModule } from './../util/util.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MusicRoutingModule } from './music-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicComponent } from './music.component';
import { AddMusicComponent } from './add-music/add-music.component';
@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UtilModule
  ],
  declarations: [ AddMusicComponent, MusicComponent],
  exports: [AddMusicComponent, MusicComponent]
})
export class MusicModule { }
