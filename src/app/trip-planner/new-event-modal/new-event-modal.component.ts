import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {NavParams} from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-new-event-modal',
    templateUrl: './new-event-modal.component.html',
    styleUrls: ['./new-event-modal.component.scss'],
})
export class NewEventModalComponent implements OnInit {

    event = {
        startTime: new Date().toISOString(),
        endTime: new Date().toISOString(),
        allDay: false,
        room: {}
    };
    minDate = new Date().toISOString();

    constructor(
        private navParams: NavParams,
        public modalController: ModalController) {
        const preselectedDate = moment(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
    }

    ngOnInit() {
    }

    cancel() {
        this.modalController.dismiss();
    }

    save() {
        this.modalController.dismiss({data: this.event});
    }

    optionSelected($event) {
        console.log($event);
    }
}

