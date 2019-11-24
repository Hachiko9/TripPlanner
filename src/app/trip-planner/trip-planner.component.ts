import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Trip} from '../models/Trip';
import {AlertController, ModalController} from '@ionic/angular';
import {CalendarComponent} from 'ionic2-calendar/calendar';
import {formatDate} from '@angular/common';
import {NewExpenseModalComponent} from '../trip-expenses/new-expense-modal/new-expense-modal';
import {NewEventModalModule} from './new-event-modal/new-event-modal.module';
import {NewEventModalComponent} from './new-event-modal/new-event-modal.component';

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
        @Inject(LOCALE_ID) private locale: string
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
        /*this.eventSource.push({
            allDay: false,
            endTime: '2019-11-24T17:05:00+01:00',
            startTime: '2019-11-24T00:00:00+01:00',
            title: 'aaa'
        });*/
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
    markDisabled = (date: Date) => {
        const current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    }
    blockDayEvent(date) {
        const startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

        const endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));

        const events = this.eventSource;
        events.push({
            title: 'All Day ',
            startTime,
            endTime,
            allDay: true
        });
        this.eventSource = [];
        setTimeout(() => {
            this.eventSource = events;
        });
    }

    async addEvent() {
        const modal = await this.modalController.create({
            component: NewEventModalComponent
        });

        await modal.present();
        const { data } = await modal.onWillDismiss();

        if (data) {
            console.log('here', data);
            setTimeout(() => {
                this.eventSource.push(data.data);
                console.log('eventSource', this.eventSource);
            });
        }
    }

    onOptionSelected($event: any) {
        console.log($event);
        // this.calendar.mode = $event
    }
}
