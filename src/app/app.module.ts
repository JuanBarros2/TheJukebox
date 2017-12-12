import { ServerApi } from './auth/server.api';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';

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
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MusicModule,
    ArtistModule,
    PlaylistModule,
    AlbumModule,
    AuthModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ServerApi),
  ],
  providers: [FacadeService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
