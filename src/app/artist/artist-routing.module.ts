import { ListArtistsComponent } from './list-artists/list-artists.component';
import { AddArtistComponent } from './add-artist/add-artist.component';
import { ArtistComponent } from './artist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const artistRoutes: Routes = [
  {
    path: 'artistas', component: ListArtistsComponent,
    data: {
      breadcrumb: 'Artistas'
    },
    children: [
      {
        path: 'add', component: AddArtistComponent,
        data: {
            breadcrumb: 'Adicionar artista'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(artistRoutes)],
  exports: [RouterModule]
})
export class ArtistRoutingModule { }
