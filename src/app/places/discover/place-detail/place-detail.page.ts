import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private router: Router, private navCtrl: NavController, private modalController: ModalController) { }

  ngOnInit() {
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    //this.navCtrl.navigateBack('/places/tabs/discover');
    this.modalController.create({ component: CreateBookingComponent, componentProps: { selectedPlace: this.place } }).then(modalEl => {
      modalEl.present();
    });
  }

}
