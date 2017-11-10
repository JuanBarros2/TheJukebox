import { AddPlaylistComponent } from './add-playlist/add-playlist.component';
import { PlaylistComponent } from './playlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'playlists', component: PlaylistComponent,
    data: {
      breadcrumb: 'Playlists'
    },
    children: [
      {
        path: 'add', component: AddPlaylistComponent,
        data: {
          breadcrumb: 'Adicionar'
        }
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
