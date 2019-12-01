import {Component, OnInit} from '@angular/core';
import {Trip} from '../models/Trip';
import {Router} from '@angular/router';
import { TripService } from '../services/trip.service';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    public trips: Trip[] = [];

    constructor(
        private router: Router,
        private tripService: TripService
    ) {
        this.tripService.getTrips().subscribe((trips) => {
            console.log(trips);
            this.trips = trips;
        });
    }

    ngOnInit() {}

    public goToDetailPage(trip: Trip) {
        this.router.navigate(['/trip-detail'], {state: {trip}});
    }
// add back when alpha.4 is out
// navigate(item) {
//   this.router.navigate(['/list', JSON.stringify(item)]);
// }
}
