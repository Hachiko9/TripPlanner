import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Trip} from '../models/Trip';

@Component({
    selector: 'app-trip-detail',
    templateUrl: './trip-detail.component.html',
    styleUrls: ['./trip-detail.component.scss'],
})
export class TripDetailComponent implements OnInit {

    private trip: Trip;

    constructor(private router: Router) {
    }

    ngOnInit() {
        const mockedTrip = {
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
        if (this.router.getCurrentNavigation().extras.state !== undefined) {
            this.trip = this.router.getCurrentNavigation().extras.state.trip;
        } else {
            this.trip = mockedTrip;
        }

        this.goToPlanner();
    }

    public goToPlanner(): void {
        this.router.navigate(['/trip-detail/planner'], {state: {trip: this.trip}});
    }

    public goToExpenses(): void {
        this.router.navigate(['/trip-detail/expenses'], {state: {trip: this.trip}});
    }

    public goToGallery(): void {
        this.router.navigate(['/trip-detail/gallery'], {state: {trip: this.trip}});
    }
}
