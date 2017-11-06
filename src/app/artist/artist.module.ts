import { UtilModule } from './../util/util.module';
import { FieldErrorFormComponent } from '../util/field-error-form/field-error-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArtistRoutingModule } from './artist-routing.module';

import { ArtistComponent } from './artist.component';
import { AddArtistComponent } from './add-artist/add-artist.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsService } from './artists.service';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { SearchArtistComponent } from './search-artist/search-artist.component';

@NgModule({
  imports: [
    CommonModule,
    ArtistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UtilModule
  ],
  providers: [ArtistsService],
  declarations: [ ArtistComponent, AddArtistComponent, ListArtistsComponent, SearchArtistComponent],
  exports: [ArtistComponent]
})
export class ArtistModule { }
