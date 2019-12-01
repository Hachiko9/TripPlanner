import {Component, Input, OnInit} from '@angular/core';

interface Dates {
    from: string;
    to: string;
}

@Component({
    selector: 'app-trip-summary',
    templateUrl: './trip-summary.component.html',
    styleUrls: ['./trip-summary.component.scss'],
})
export class TripSummaryComponent implements OnInit {

    @Input() dates: Dates;
    @Input() city: string;

    constructor() {
        console.log(this.dates);
    }

    ngOnInit() {
    }

}
