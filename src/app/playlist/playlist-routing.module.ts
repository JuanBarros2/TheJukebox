import { AuthGuard } from './../auth/auth.guard';
import { AddMusicComponent } from './add-music/add-music.component';
import { AddPlaylistComponent } from './add-playlist/add-playlist.component';
import { PlaylistComponent } from './playlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'playlists', component: PlaylistComponent,
    canActivate: [AuthGuard],
    data: {
      breadcrumb: 'Playlists'
    },
    children: [
      {
        path: 'add', component: AddPlaylistComponent,
        data: {
          breadcrumb: 'Adicionar playlist'
        }
      },
      {
        path: 'add/music', component: AddMusicComponent,
        data: {
          breadcrumb: 'Adicionar música'
        }
      }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaylistRoutingModule { }
