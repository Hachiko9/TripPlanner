import { Component } from '@angular/core';
import {Trip} from '../models/Trip';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nextTrip: Trip = {
      _id: '5dd29bb88e73ff61694fdc35',
      participants: ['Joy'],
      city: 'Cava',
      fromDate: '29-02-2020',
      toDate: '29-03-2020',
      picture: '',
      accommodation: 'Hotel Victoria'
  };

  public nextTripDetails = `
    <div class="home-button-details">
        <h5>Next trip: ${this.nextTrip.city} </h5>
        <span> ${this.nextTrip.accommodation} </span> <br>
        <span>  From: ${this.nextTrip.fromDate} </span> <br>
        <span>  To: ${this.nextTrip.toDate} </span>
    </div>`;

  constructor() {}
}
