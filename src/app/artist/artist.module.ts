import { ArtistComponent } from './artist.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArtistComponent],
  exports: [ArtistComponent]
})
export class ArtistModule { }
