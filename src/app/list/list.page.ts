import {Component, OnInit} from '@angular/core';
import {Trip} from '../models/Trip';
import {Router} from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    public trips: Trip[] = [
        {
            _id: '5dd29bb99e73ff61694fdc35',
            participants: ['Joy'],
            city: 'Firenze',
            dates: {
                from: '23-10-2010',
                to: '24-10-2010'
            },
            pictures: [],
            expenses: [],
            accommodation: ''
        },
        {
            _id: '5dd29bb88e73ff61694fdc35',
            participants: ['Joy'],
            city: 'Cava',
            dates: {
                from: '02-11-2010',
                to: '12-11-2010'
            },
            pictures: [],
            expenses: [],
            accommodation: ''
        }
    ];

    constructor(
        private router: Router
    ) {}

    ngOnInit() {}

    public goToDetailPage(trip: Trip) {
        this.router.navigate(['/trip-detail'], {state: {trip}});
    }
// add back when alpha.4 is out
// navigate(item) {
//   this.router.navigate(['/list', JSON.stringify(item)]);
// }
}
