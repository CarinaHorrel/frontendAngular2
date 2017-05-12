import { Injectable }               from '@angular/core';
// net zoals in Postman, HTTP request levert een response op:
import { Http, Response, Headers }  from '@angular/http';
import { Observable }               from 'rxjs/Observable';

import { Genre }                     from '../genre/genre';

@Injectable()
export class GenreService {

  // Op deze manier (http van class Http) wordt een private field aangemaakt.
  constructor(private http: Http) {

  }

  private headers = new Headers({ 'Content-Type': 'application/json' });  

  postGenre(genre: Genre) {
    console.log("genre.service - postGenre");
/*
    return this.http.post("http://rollingsticks.test.carpago.nl/api/bladmuziek", JSON.stringify(bladmuziek), { headers: this.headers }).map(res => res.json());

//    return this.http.post("http://localhost:8082/api/bladmuziek", JSON.stringify(bladmuziek), { headers: this.headers }).map(res => res.json());
      
    // Deze statements gebruiken, wanneer de backend text terugstuurt (alleen id) ipv het hele JSON object.
    // return this.http.post("http://localhost:8082/api/bladmuziek", JSON.stringify(bladmuziek), { headers: this.headers }).map(res => {
    //   console.log("New bladmuziek id = " + res.text());
    // });
  }  

  */
   return this.http.post("http://localhost:8082/api/genre", JSON.stringify(genre), { headers: this.headers }).map(res => res.json());
      
    // Deze statements gebruiken, wanneer de backend text terugstuurt (alleen id) ipv het hele JSON object.
    // return this.http.post("http://localhost:8082/api/genre", JSON.stringify(genre), { headers: this.headers }).map(res => {
    //   console.log("New genre id = " + res.text());
    // });
  } 
  
  // Ik beloof (observable, vroeger promise) dat ik een bladmuziek ga opsturen, maar zeg niet wanneer.
  // Oftewel asynchroon.
  // Wat je terugkrijgt is res, maar alleen het .json gedeelte wordt wat meegedaan. Terug naar aanroepende functie gaat dan alleen het json gedeelte
  getGenreById(id: number): Observable<Genre> {
    // return this.http.get("http://rollingsticks.test.carpago.nl/api/bladmuziek/" + id).map(res => res.json());
   return this.http.get("http://localhost:8082/api/genre/" + id).map(res => res.json());
  }

  getGenre(): Observable<Genre[]> {
    // return this.http.get("http://rollingsticks.test.carpago.nl/api/bladmuziek").map(res => res.json());
   return this.http.get("http://localhost:8082/api/genre").map(res => res.json());
  }  
  
}
