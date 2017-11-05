import { MusicComponent } from './music.component';
import { AddMusicComponent } from './add-music/add-music.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const musicRoutes: Routes = [
  { path: 'musicas', component: MusicComponent,
    data: {
      breadcrumb: 'Música'
    }
},
  { path: 'musicas/add', component: AddMusicComponent,
      data: {
        breadcrumb: 'Adicionar música'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(musicRoutes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
