import {Component, OnInit} from '@angular/core';
import {Trip} from '../models/Trip';
import {Router} from '@angular/router';
import {NewTripDatesModalComponent} from './new-trip-dates-modal/new-trip-dates-modal';
import {ModalController} from '@ionic/angular';
import {TripService} from '../services/trip.service';


@Component({
    selector: 'app-new-trip',
    templateUrl: './new-trip.component.html',
    styleUrls: ['./new-trip.component.scss'],
})

export class NewTripComponent implements OnInit {
    public newTrip: Trip;

    constructor(
        private router: Router,
        private modalController: ModalController,
        private tripService: TripService
    ) {
        this.newTrip = new Trip();
    }

    ngOnInit() {
    }

    public saveTrip() {
        // noinspection TsLint
        const part = <string><unknown>this.newTrip.participants;
        this.newTrip.participants = [];
        this.newTrip.participants.push(part);
        this.tripService.createTrip(this.newTrip).subscribe(() => {
            this.router.navigate(['/list'], {state: {trip: this.newTrip}});
        });
    }

    public async showCalendarToggle() {
        const modal = await this.modalController.create({
            component: NewTripDatesModalComponent
        });

        await modal.present();

        const { data } = await modal.onWillDismiss();
        this.newTrip.dates = data.data;
    }
}
