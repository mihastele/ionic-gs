import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'abc',
      placeId: 'p1',
      placeTitle: 'aaa',
      guestNumber: 1,
      userId: 'abc',
    },
  ];

  get bookings() {
    return this._bookings;
  }
}
