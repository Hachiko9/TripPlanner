import {Component, OnInit} from '@angular/core';
import {Trip} from '../models/Trip';

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
            fromDate: '29-02-2010',
            toDate: '29-03-2010',
            picture: '',
            accommodation: ''
        },
        {
            _id: '5dd29bb88e73ff61694fdc35',
            participants: ['Joy'],
            city: 'Cava',
            fromDate: '29-02-2020',
            toDate: '29-03-2020',
            picture: '',
            accommodation: ''
        }
    ];

ngOnInit() {}


// add back when alpha.4 is out
// navigate(item) {
//   this.router.navigate(['/list', JSON.stringify(item)]);
// }
}
