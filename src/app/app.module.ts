import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArtistModule } from './artist/artist.module';
import { MusicModule } from './music/music.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MusicModule,
    ArtistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
