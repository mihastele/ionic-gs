import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1', 'Manhattan Mansion', '222d2dd2d', 'https://robohash.org/R2Q.png?set=set1', 22),
    new Place('p2', 'aasasa', '222d2dd2d', 'https://robohash.org/R22Q.png?set=set1', 222),
    new Place('p3', 'asasas', '222d2dd2d', 'https://robohash.org/R12Q.png?set=set1', 222),
    new Place('p4', 'csacasrercascse', '222d2dd2d', 'https://robohash.org/R2Qaa.png?set=set1', 322.33),
    new Place('p5', 'rercascsae', '222d2dd2d', 'https://robohash.org/R2Qaa.png?set=set1', 222),
    new Place('p6', 'redwradwdae', '222d2dd2d', 'https://robohash.org/R2Qaadw.png?set=set1', 21),
  ];

  getPlaces() {
    return [...this._places];
  }

  constructor() { }
}
