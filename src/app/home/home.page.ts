import { Component } from '@angular/core';
import {Trip} from '../models/Trip';
import {Router} from '@angular/router';

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
      dates: {
          from: '23-10-2010',
          to: '24-10-2010'
      },
      pictures: [],
      expenses: [],
      accommodation: 'Hotel Victoria'
  };

  public nextTripDetails = `
    <div class="home-button-details">
        <h5>Next trip: ${this.nextTrip.city} </h5>
        <span> ${this.nextTrip.accommodation} </span> <br>
        <span>  From: ${this.nextTrip.dates.from} </span> <br>
        <span>  To: ${this.nextTrip.dates.to} </span>
    </div>`;

  constructor(private router: Router) {}

    public goToDetails() {
        this.router.navigate(['/trip-detail'], {state: {trip: this.nextTrip}});
    }
}


