import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Trip} from '../models/Trip';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-trip-expenses',
    templateUrl: './trip-expenses.component.html',
    styleUrls: ['./trip-expenses.component.scss'],
})
export class TripExpensesComponent implements OnInit {

    public trip: Trip;

    constructor(
        private router: Router,
        private modal: ModalController
    ) {
    }

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

        this.trip.expenses = [
            {
                _id: '1',
                amount: 14,
                date: '29-02-2020',
                buyer: 'Joy',
                place: 'Cava',
                reason: 'lunch'
             }
        ];

    }

    public addNewExpense(): void {

    }
}
