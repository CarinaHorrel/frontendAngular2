import { Component }        from '@angular/core';
import { DVD }              from '../dvd/dvd';

@Component({
  selector:                      'adddvd',
  templateUrl:                   './adddvd.component.html',
})
export class AddDVDComponent {

  adddvd  : DVD = new DVD();
  postDVD(){}


}