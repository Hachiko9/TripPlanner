import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {NavParams} from '@ionic/angular';
import { ModalController } from '@ionic/angular';

export interface PlannedEvent {
    title: string;
    notes: string;
    startTime: string | Date;
    endTime: string | Date;
    allDay: boolean;
}

@Component({
    selector: 'app-new-event-modal',
    templateUrl: './new-event-modal.component.html',
    styleUrls: ['./new-event-modal.component.scss'],
})
export class NewEventModalComponent implements OnInit {

    public plannedEvent: PlannedEvent = {
        title: '',
        notes: '',
        startTime: new Date().toISOString(),
        endTime: new Date().toISOString(),
        allDay: false,
    };
    minDate = new Date().toISOString();

    constructor(
        private navParams: NavParams,
        public modalController: ModalController) {
        const preselectedDate = moment(this.navParams.get('selectedDay')).format();
        this.plannedEvent.startTime = preselectedDate;
        this.plannedEvent.endTime = preselectedDate;
    }

    ngOnInit() {
    }

    cancel() {
        this.modalController.dismiss();
    }

    save() {
        this.modalController.dismiss(this.plannedEvent);
    }

    optionSelected($event) {
        console.log($event);
    }
}

