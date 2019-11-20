import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Trip} from '../models/Trip';

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.scss'],
})

export class TripPlannerComponent implements OnInit {

    public trip: Trip;

    constructor(private router: Router) { }

    ngOnInit() {
        const mockedTrip = {
            _id: '5dd29bb88e73ff61694fdc35',
            participants: ['Joy'],
            city: 'Cava',
            fromDate: '29-02-2020',
            toDate: '29-03-2020',
            picture: '',
            accommodation: 'Hotel Victoria'
        };
        if (this.router.getCurrentNavigation().extras.state !== undefined) {
            this.trip = this.router.getCurrentNavigation().extras.state.trip;
        } else {
            this.trip = mockedTrip;
        }
    }
}
