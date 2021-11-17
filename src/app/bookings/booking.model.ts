export class Booking {
  constructor(
    public id: string,
    public placeId: string,
    public userId: string,
    public placeTitle: string,
    public placeImage: string,
    public guestNumber: number,
    public firstName: string,
    public lastName: string,
    public bookdeFrom: Date,
    public bookedTo: Date
  ) {}
}
