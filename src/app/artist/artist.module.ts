import { FormsModule } from '@angular/forms';

import { ArtistRoutingModule } from './artist-routing.module';

import { ArtistComponent } from './artist.component';
import { AddArtistComponent } from './add-artist/add-artist.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsService } from './artists.service';

@NgModule({
  imports: [
    CommonModule,
    ArtistRoutingModule,
    FormsModule
  ],
  providers: [ArtistsService],
  declarations: [ArtistComponent, AddArtistComponent],
  exports: [ArtistComponent]
})
export class ArtistModule { }
