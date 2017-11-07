import { UtilModule } from './../util/util.module';
import { FieldErrorFormComponent } from '../util/field-error-form/field-error-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RatingModule } from 'ngx-rating';

import { ArtistRoutingModule } from './artist-routing.module';

import { ArtistComponent } from './artist.component';
import { AddArtistComponent } from './add-artist/add-artist.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsService } from './artists.service';
import { ListArtistsComponent } from './list-artists/list-artists.component';
import { SearchArtistComponent } from './search-artist/search-artist.component';
import { InfoArtistComponent } from './list-artists/info-artist/info-artist.component';
import { ListAlbumComponent } from './list-artists/info-artist/list-album/list-album.component';

@NgModule({
  imports: [
    CommonModule,
    ArtistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    UtilModule
  ],
  providers: [ArtistsService],
  declarations: [ ArtistComponent, AddArtistComponent, ListArtistsComponent, SearchArtistComponent, InfoArtistComponent, ListAlbumComponent],
  exports: [ArtistComponent]
})
export class ArtistModule { }
