import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';

export const router: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'music', component: MusicComponent },
    { path: 'books', component: BooksComponent },
    { path: 'contact', component: ContactComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);