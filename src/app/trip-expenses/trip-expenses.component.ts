import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Trip} from '../models/Trip';
import { ModalController } from '@ionic/angular';
import {NewExpenseModalComponent} from './new-expense-modal/new-expense-modal';

@Component({
    selector: 'app-trip-expenses',
    templateUrl: './trip-expenses.component.html',
    styleUrls: ['./trip-expenses.component.scss'],
})
export class TripExpensesComponent implements OnInit {

    public trip: Trip;

    constructor(
        private router: Router,
        private modalController: ModalController
    ) {
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

    public async addNewExpense() {
        const modal = await this.modalController.create({
            component: NewExpenseModalComponent
        });

        return await modal.present();
    }
}
