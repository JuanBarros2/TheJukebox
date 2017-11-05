
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArtistModule } from './artist/artist.module';
import { MusicModule } from './music/music.module';
import { AlbumModule } from './album/album.module';
import { PlaylistModule } from './playlist/playlist.module';
import { FacadeService } from './facade.service';
import { BreadcrumbComponent } from './util/breadcrumb/breadcrumb.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MusicModule,
    ArtistModule,
    PlaylistModule,
    AlbumModule
  ],
  providers: [FacadeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
