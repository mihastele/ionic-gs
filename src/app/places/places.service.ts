import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Place } from './place.model';

interface PlaceData {
  availableFrom: string;
  availableTo: string;
  description: string;
  title: string;
  imageUrl: string;
  price: number;
  userId: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places = new BehaviorSubject<Place[]>([
    /*
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
    ,*/
  ]);

  get places() {
    return this._places.asObservable();
  }

  fetchPlaces() {
    return this.http
      .get<{ [key: string]: PlaceData }>(
        'https://schwarzmuller-cc6b7-default-rtdb.europe-west1.firebasedatabase.app/offered-places.json'
      )
      .pipe(
        map((resData) => {
          const places = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              places.push(
                new Place(
                  key,
                  resData[key].title,
                  resData[key].description,
                  resData[key].imageUrl,
                  resData[key].price,
                  new Date(resData[key].availableFrom),
                  new Date(resData[key].availableTo),
                  resData[key].userId
                )
              );
            }
          }
          return places;
        }),
        tap((places) => {
          this._places.next(places);
        })
      );
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
    let generatedId: string;
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

    console.log(newPlace);
    return;

    return this.http
      .post<{ name: string }>(
        'https://schwarzmuller-cc6b7-default-rtdb.europe-west1.firebasedatabase.app/offered-places.json',
        { ...newPlace, id: null }
      )
      .pipe(
        switchMap((resData) => {
          generatedId = resData.name;
          return this.places;
        }),
        take(1),
        tap((places) => {
          newPlace.id = generatedId;
          this._places.next(places.concat(newPlace));
        })
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

  constructor(private authService: AuthService, private http: HttpClient) {}
}
