import { Component }     from '@angular/core';
import { Actor }         from '../actor/actor';

@Component({
  selector:                   'addactor',
  templateUrl:                './addactor.component.html',
})
export class AddActorComponent {

  addactor  : Actor = new Actor();
  postActor(){}
}