import { UtilModule } from './../util/util.module';
import { FieldErrorFormComponent } from '../util/field-error-form/field-error-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormsModule,
    ReactiveFormsModule,
    UtilModule
  ],
  providers: [ArtistsService],
  declarations: [ ArtistComponent, AddArtistComponent],
  exports: [ArtistComponent]
})
export class ArtistModule { }
