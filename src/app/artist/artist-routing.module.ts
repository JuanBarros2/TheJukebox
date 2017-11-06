import { AddArtistComponent } from './add-artist/add-artist.component';
import { ArtistComponent } from './artist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const artistRoutes: Routes = [
  {
    path: 'artistas', component: ArtistComponent,
    data: {
      breadcrumb: 'Artistas'
    },
    children: [
      {
        path: 'add', component: AddArtistComponent,
        data: { breadcrumb: 'Adicionar artista' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(artistRoutes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
