import { Injectable }               from '@angular/core';
// net zoals in Postman, HTTP request levert een response op:
import { Http, Response, Headers }  from '@angular/http';
import { Observable }               from 'rxjs/Observable';

import { Actor }               from '../actor/actor';

@Injectable()
export class ActorService {

  // Op deze manier (http van class Http) wordt een private field aangemaakt.
  constructor(private http: Http) {

  }

  private headers = new Headers({ 'Content-Type': 'application/json' });  

  postActor(actor: Actor) {
    console.log("actor.service - postActor");
/*
    return this.http.post("http://rollingsticks.test.carpago.nl/api/bladmuziek", JSON.stringify(bladmuziek), { headers: this.headers }).map(res => res.json());

//    return this.http.post("http://localhost:8082/api/bladmuziek", JSON.stringify(bladmuziek), { headers: this.headers }).map(res => res.json());
      
    // Deze statements gebruiken, wanneer de backend text terugstuurt (alleen id) ipv het hele JSON object.
    // return this.http.post("http://localhost:8082/api/bladmuziek", JSON.stringify(bladmuziek), { headers: this.headers }).map(res => {
    //   console.log("New bladmuziek id = " + res.text());
    // });
  }  

  */
   return this.http.post("http://localhost:8082/api/actor", JSON.stringify(actor), { headers: this.headers }).map(res => res.json());
      
    // Deze statements gebruiken, wanneer de backend text terugstuurt (alleen id) ipv het hele JSON object.
    // return this.http.post("http://localhost:8082/api/actor", JSON.stringify(actor), { headers: this.headers }).map(res => {
    //   console.log("New actor id = " + res.text());
    // });
  } 
  
  // Ik beloof (observable, vroeger promise) dat ik een bladmuziek ga opsturen, maar zeg niet wanneer.
  // Oftewel asynchroon.
  // Wat je terugkrijgt is res, maar alleen het .json gedeelte wordt wat meegedaan. Terug naar aanroepende functie gaat dan alleen het json gedeelte
  getActorById(id: number): Observable<Actor> {
    // return this.http.get("http://rollingsticks.test.carpago.nl/api/bladmuziek/" + id).map(res => res.json());
   return this.http.get("http://localhost:8082/api/actor/" + id).map(res => res.json());
  }

  getActor(): Observable<Actor[]> {
    // return this.http.get("http://rollingsticks.test.carpago.nl/api/bladmuziek").map(res => res.json());
   return this.http.get("http://localhost:8082/api/actor").map(res => res.json());
  }  
  
}
