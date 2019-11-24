import {Component, OnInit} from '@angular/core';
import {Trip} from '../models/Trip';
import {Router} from '@angular/router';
import {NewTripDatesModalComponent} from './new-trip-dates-modal/new-trip-dates-modal';
import {ModalController} from '@ionic/angular';


@Component({
    selector: 'app-new-trip',
    templateUrl: './new-trip.component.html',
    styleUrls: ['./new-trip.component.scss'],
})

export class NewTripComponent implements OnInit {
    public newTrip: Trip;

    constructor(
        private router: Router,
        private modalController: ModalController
    ) {
        this.newTrip = new Trip();
    }

    ngOnInit() {
    }

    public saveTrip() {
        this.router.navigate(['/list'], {state: {trip: this.newTrip}});
    }

    public async showCalendarToggle() {
        const modal = await this.modalController.create({
            component: NewTripDatesModalComponent
        });

        await modal.present();

        const { data } = await modal.onWillDismiss();
        console.log(data);
    }
}
