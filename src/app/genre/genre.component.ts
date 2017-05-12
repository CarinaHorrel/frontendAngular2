import { Component } from '@angular/core';

import { Genre }            from './genre';
import { GenreService }     from './genre.service';


@Component({
  selector: 'genre',
  templateUrl: './genre.component.html',
  providers:[ GenreService ]
})

export class GenreComponent {
  title = 'genre works!';

  allGenre:    Genre[];
  genre:       Genre;
  genreInvoer: Genre = new Genre;
  genreId:     number;

  constructor(private genreService: GenreService) {
  }

  getGenre() {
    this.genreService.getGenre().subscribe(allGenre => {
      console.log("Genre alles, succes!");
      console.log(allGenre);
      this.allGenre = allGenre;
    });
  }

  getGenreById(id: number) {
    console.log(this.genreId);
    console.log(id);
    this.genreService.getGenreById(id).subscribe(genre => {
    //   console.log("Bladmuziek per stuk, succes!");
      console.log(genre);
      this.genre = genre;
    });
  }

  postGenre() {
    console.log(this.genreInvoer);
    // zonder .subscribe werkt het niet!
    // Deze code gaan gebruiken, zodra backend text (id) teruggeeft ipv json
    // this.bladmuziekService.postBladmuziek(this.bladmuziekInvoer).subscribe();
    this.genreService.postGenre(this.genreInvoer).subscribe(genreInvoer => {
      console.log("Genre gepost, succes!");
      console.log(genreInvoer);
      this.genre = genreInvoer;
      this.genreId = genreInvoer.id;
    });
  }
}

// listGenre
// deleteGenreById
// putGenre