import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { MusicComponent } from './music/music.component';
import { BooksComponent } from './books/books.component';
import { ContactComponent } from './contact/contact.component';
import { AddDVDComponent } from './movies/adddvd.component'; 
import { AddActorComponent } from './movies/addactor.component'; 
import { AddGenreComponent } from './movies/addgenre.component'; 

import './rxjs-extensions';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },

    { path: 'movies', component: MoviesComponent, children: [
        { path: 'databasemovies' ,   component: DatabaseInputComponent, children: [
            { path: 'adddvd'         ,   component: AddDVDComponent },
            { path: 'addactor'       ,   component: AddActorComponent },  
            { path: 'addgenre'       ,   component: AddGenreComponent }
        ]},

    //     { path: 'overviewmovies'     ,   component: DatabaseoverviewComponent, children: [
    //         { path: 'addgenre'       ,   component: MuziekstukoverzichtComponent   }   
    //     ]},

    //     { path: 'moviereviews'    ,   component: MoviesReviewComponent, children: [
    //     { path: 'IMDB'    ,   component: MuziekstukoverzichtComponent   },
    //     { path: 'Empire'     ,   component: MuziekstukoverzichtComponent   },  
    //     { path: 'Metacritic'     ,   component: MuziekstukoverzichtComponent   },
    //     ]},

    //   { path: 'otherlinks'         ,   component: DatabaseoverviewComponent, children: [
    //         { path: 'addmovie'    ,   component: MuziekstukoverzichtComponent   },
    //         { path: 'addactor'     ,   component: MuziekstukoverzichtComponent   },  
    //         { path: 'addgenre'     ,   component: MuziekstukoverzichtComponent   },
    //         ]},

    // ]},

//  { path: 'music', component: MusicComponent, children: [
//           { path: 'databasemusic' ,   component: DatabaseoverviewComponent, children: [
//             { path: 'addmusic'    ,   component: MuziekstukoverzichtComponent   },
//             { path: 'addartist'     ,   component: MuziekstukoverzichtComponent   },  
//             { path: 'addgenre'     ,   component: MuziekstukoverzichtComponent   },
//             ]},

//           { path: 'overviewmovies' ,   component: DatabaseoverviewComponent, children: [
//             { path: 'addwmovie'    ,   component: MuziekstukoverzichtComponent   },
//             { path: 'addactor'     ,   component: MuziekstukoverzichtComponent   },  
//             { path: 'addgenre'     ,   component: MuziekstukoverzichtComponent   },    
//             ]},

//          { path: 'moviereviews'    ,   component: DatabaseoverviewComponent, children: [
//             { path: 'addwmovie'    ,   component: MuziekstukoverzichtComponent   },
//             { path: 'addactor'     ,   component: MuziekstukoverzichtComponent   },  
//             { path: 'addgenre'     ,   component: MuziekstukoverzichtComponent   },
//             ]},

//       { path: 'otherlinks'         ,   component: DatabaseoverviewComponent, children: [
//             { path: 'addwmovie'    ,   component: MuziekstukoverzichtComponent   },
//             { path: 'addactor'     ,   component: MuziekstukoverzichtComponent   },  
//             { path: 'addgenre'     ,   component: MuziekstukoverzichtComponent   },
//             ]},

//     ]},

    // { path: 'music', component: MusicComponent, children: [
    //     { path: 'leerlingoverzicht'       ,   component: MuziekstukoverzichtComponent   },
    //   { path: 'muziekles'               ,   component: MuziekstukoverzichtComponent   },
    //   { path: 'huiswerkleerling'        ,   component: MuziekstukoverzichtComponent   },
    //   { path: 'muziekoverzichtleerling' ,   component: MuziekstukoverzichtComponent   },
    // ] },

    // { path: 'books', component: BooksComponent, children: [
    //     { path: 'leerlingoverzicht'       ,   component: MuziekstukoverzichtComponent   },
    //   { path: 'muziekles'               ,   component: MuziekstukoverzichtComponent   },
    //   { path: 'huiswerkleerling'        ,   component: MuziekstukoverzichtComponent   },
    //   { path: 'muziekoverzichtleerling' ,   component: MuziekstukoverzichtComponent   },
    // ] },

    { path: 'contact', component: ContactComponent },
    { path: '**'                   , redirectTo: '/home', pathMatch: 'full' }
];

//export const routes: ModuleWithProviders = RouterModule.forRoot(router);

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }