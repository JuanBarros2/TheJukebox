import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlbumComponent],
  exports: [AlbumComponent]
})
export class AlbumModule { }
