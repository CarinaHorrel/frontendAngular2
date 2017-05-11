import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routes } from './app.router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';

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
    AboutComponent,
    MoviesComponent,
    MusicComponent,
    BooksComponent,
    ContactComponent,
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
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
