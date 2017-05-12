import { Component } from '@angular/core';

import { Actor }            from './actor';
import { ActorService }     from './actor.service';


@Component({
  selector: 'actor',
  templateUrl: './actor.component.html',
  providers:[ ActorService ]
})

export class ActorComponent {
  title = 'actor works!';

  allActor:    Actor[];
  actor:       Actor;
  actorInvoer: Actor = new Actor;
  actorId:     number;

  constructor(private actorService: ActorService) {
  }

  getActor() {
    this.actorService.getActor().subscribe(allActor => {
      console.log("Actor alles, succes!");
      console.log(allActor);
      this.allActor = allActor;
    });
  }

  getActorById(id: number) {
    console.log(this.actorId);
    console.log(id);
    this.actorService.getActorById(id).subscribe(actor => {
    //   console.log("Bladmuziek per stuk, succes!");
      console.log(actor);
      this.actor = actor;
    });
  }

  postActor() {
    console.log(this.actorInvoer);
    // zonder .subscribe werkt het niet!
    // Deze code gaan gebruiken, zodra backend text (id) teruggeeft ipv json
    // this.bladmuziekService.postBladmuziek(this.bladmuziekInvoer).subscribe();
    this.actorService.postActor(this.actorInvoer).subscribe(actorInvoer => {
      console.log("Actor gepost, succes!");
      console.log(actorInvoer);
      this.actor = actorInvoer;
      this.actorId = actorInvoer.id;
    });
  }
}

// listActor
// deleteActorById
// putActor