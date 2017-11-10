import { MusicService } from './music.service';
import { UtilModule } from './../util/util.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MusicRoutingModule } from './music-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalModule } from 'ng2-bs3-modal';

import { MusicComponent } from './music.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { ListMusicComponent } from './list-music/list-music.component';
import { InfoMusicComponent } from './list-music/info-music/info-music.component';
@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UtilModule,
    BsModalModule
  ],
  providers: [MusicService],
  declarations: [AddMusicComponent, MusicComponent, ListMusicComponent, InfoMusicComponent],
  exports: [AddMusicComponent, MusicComponent]
})
export class MusicModule { }
