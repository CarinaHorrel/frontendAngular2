import { Component }     from '@angular/core';
import { Genre }         from '../genre/genre';

@Component({
  selector:                   'addgenre',
  templateUrl:                './addgenre.component.html',
})
export class AddGenreComponent {

  addgenre  : Genre = new Genre();
  postGenre(){}
}