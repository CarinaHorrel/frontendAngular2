import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule }             from './app.router';
import { Routes } from './app.router';

import { AlertModule }                  from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';

import { ActorComponent } from './actor/actor.component';
import { ArtistComponent } from './artist/artist.component';
import { WriterComponent } from './writer/writer.component';
import { DVDComponent } from './dvd/dvd.component';
import { CDComponent } from './cd/cd.component';
import { BookComponent } from './book/book.component';
import { GenreComponent } from './genre/genre.component';
import { HomeComponent } from './home/home.component';

import { DatabaseInputComponent } from './movies/databaseinput.component'; 
import { AddDVDComponent } from './movies/adddvd.component'; 
import { AddActorComponent } from './movies/addactor.component'; 
import { AddGenreComponent } from './movies/addgenre.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MoviesComponent,
    AddDVDComponent,
    AddActorComponent,
    AddGenreComponent,
    MusicComponent,
    BooksComponent,
    ContactComponent,
    ActorComponent,
    ArtistComponent,
    WriterComponent,
    DVDComponent,
    CDComponent,
    BookComponent,
    GenreComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
