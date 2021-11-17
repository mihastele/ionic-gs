import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    new Place(
      'p1',
      'Manhattan Mansion',
      '222d2dd2d',
      'https://robohash.org/R2Q.png?set=set1',
      22,
      new Date('2019-01-01'),
      new Date('2019-12-1'),
      'abc'
    ),
    new Place(
      'p2',
      'aasasa',
      '222d2dd2d',
      'https://robohash.org/R22Q.png?set=set1',
      222,
      new Date('2019-01-01'),
      new Date('2019-12-1'),
      'abc'
    ),
    new Place(
      'p3',
      'asasas',
      '222d2dd2d',
      'https://robohash.org/R12Q.png?set=set1',
      222,
      new Date('2019-01-01'),
      new Date('2019-12-1'),
      'abc'
    ),
    new Place(
      'p4',
      'csacasrercascse',
      '222d2dd2d',
      'https://robohash.org/R2Qaa.png?set=set1',
      322.33,
      new Date('2019-01-01'),
      new Date('2019-12-1'),
      'abc'
    ),
    new Place(
      'p5',
      'rercascsae',
      '222d2dd2d',
      'https://robohash.org/R2Qaa.png?set=set1',
      222,
      new Date('2019-01-01'),
      new Date('2019-12-1'),
      'abc'
    ),
    new Place(
      'p6',
      'redwradwdae',
      '222d2dd2d',
      'https://robohash.org/R2Qaadw.png?set=set1',
      21,
      new Date('2019-01-01'),
      new Date('2019-12-1'),
      'def'
    ),
    ,
  ]);

  get places() {
    return this._places.asObservable();
  }

  getPlace(id: string) {
    return this.places.pipe(
      take(1),
      map((places) => {
        return { ...places.find((p) => p.id === id) };
      })
    );
  }

  addPlace(
    title: string,
    description: string,
    price: number,
    availableFrom: Date,
    availableTo: Date,
    imageUrl: string = 'https://robohash.org/R2Qaadw.png?set=set1'
  ) {
    const newPlace = new Place(
      Math.random().toString(),
      title,
      description,
      imageUrl,
      price,
      availableFrom,
      availableTo,
      this.authService.userId
    );
    return this.places.pipe(
      take(1),
      delay(1000),
      tap((places) => {
        this._places.next(places.concat(newPlace));
      })
    );
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this.places.pipe(
      take(1),
      tap((places) => {
        const updatedPlaceIndex = places.findIndex((pl) => pl.id === placeId);
        const updatedPlaces = [...places];
        const oldPlace = updatedPlaces[updatedPlaceIndex];
        updatedPlaces[updatedPlaceIndex] = new Place(
          oldPlace.id,
          title,
          description,
          oldPlace.imageUrl,
          oldPlace.price,
          oldPlace.availableFrom,
          oldPlace.availableFrom,
          oldPlace.userId
        );
        this._places.next(updatedPlaces);
      })
    );
  }

  constructor(private authService: AuthService) {}
}
