import { ArtistRoutingModule } from './artist-routing.module';
import { ArtistComponent } from './artist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ArtistRoutingModule
  ],
  declarations: [ArtistComponent],
  exports: [ArtistComponent]
})
export class ArtistModule { }
