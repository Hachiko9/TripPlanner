import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Trip} from '../models/Trip';
import {AlertController, ModalController} from '@ionic/angular';
import {NewEventModalComponent} from './new-event-modal/new-event-modal.component';
import * as moment from 'moment';

@Component({
  selector: 'app-trip-planner',
  templateUrl: './trip-planner.component.html',
  styleUrls: ['./trip-planner.component.scss'],
})

export class TripPlannerComponent implements OnInit {

    public trip: Trip;

    public selectedDay = new Date();
    public selectedObject;
    public eventSource = [];
    public viewTitle;
    public isToday: boolean;
    public calendarModes = [
        { key: 'month', value: 'Month' },
        { key: 'week', value: 'Week' },
        { key: 'day', value: 'Day' },
    ];
    public calendar = {
        mode: this.calendarModes[2].key,
        currentDate: new Date()
    }; // these are the variable used by the calendar.

    constructor(
        private router: Router,
        private alertCtrl: AlertController,
        private modalController: ModalController,
    ) { }

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
        this.eventSource = [{
            allDay: false,
            startTime: moment().toDate(),
            endTime: moment().add(1, 'h').toDate(),
            title: 'aaa'
        }];
    }

    public onChange(data) {
        console.log('onChange data ', data);
    }

    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onEventSelected(event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    }
    today() {
        this.calendar.currentDate = new Date();
    }
    onTimeSelected(ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
        this.selectedObject = ev;
        // this.openActionSheet(ev)
    }
    onCurrentDateChanged(event: Date) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();

        this.selectedDay = event;

    }
    public markDisabled(date: Date) {
        const current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    }

    async addEvent() {
        const modal = await this.modalController.create({
            component: NewEventModalComponent
        });

        await modal.present();
        const { data } = await modal.onWillDismiss();

        if (data) {
            const eventData = data;
            const events = this.eventSource;

            eventData.startTime = moment(data.startTime).toDate();
            eventData.endTime = moment(data.endTime).toDate();

            events.push(eventData);
            this.eventSource = [];

            setTimeout(() => {
                this.eventSource = events;
            });
        }
    }

    onOptionSelected($event: any) {
        console.log($event);
        // this.calendar.mode = $event
    }
}
