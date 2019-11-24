import {Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {CalendarComponentOptions} from 'ion2-calendar';

@Component({
    selector: 'new-trip-dates-modal',
    templateUrl: './new-trip-dates-modal.html',
    styleUrls: ['./new-trip-dates-modal.scss'],
})
export class NewTripDatesModalComponent implements OnInit {

    public dateRange: { from: string; to: string; };
    public type = 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
    public optionsRange: CalendarComponentOptions = {
        pickMode: 'range'
    };

    constructor(private modalController: ModalController) {}

    ngOnInit() {}

    public close() {
        this.modalController.dismiss({
            dismissed: true
        });
    }

    public saveDates() {
        this.modalController.dismiss({
            data: this.dateRange
        });
    }
}