import { ArtistComponent } from './artist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const artistRoutes: Routes = [
  { path: 'artistas', component: ArtistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(artistRoutes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
