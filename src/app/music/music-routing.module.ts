import { MusicComponent } from './music.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const musicRoutes: Routes = [
  { path: 'musicas', component: MusicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(musicRoutes)],
  exports: [RouterModule]
})
export class MusicRoutingModule { }
