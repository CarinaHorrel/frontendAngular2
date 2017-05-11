import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActorComponent } from './actor/actor.component';
import { ArtistComponent } from './artist/artist.component';
import { WriterComponent } from './writer/writer.component';
import { DvdComponent } from './dvd/dvd.component';
import { CdComponent } from './cd/cd.component';
import { BookComponent } from './book/book.component';
import { GenreComponent } from './genre/genre.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorComponent,
    ArtistComponent,
    WriterComponent,
    DvdComponent,
    CdComponent,
    BookComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
