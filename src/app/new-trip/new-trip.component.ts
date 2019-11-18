import { Component, OnInit } from '@angular/core';
import {Trip} from '../models/Trip';

@Component({
  selector: 'app-new-trip',
  templateUrl: './new-trip.component.html',
  styleUrls: ['./new-trip.component.scss'],
})
export class NewTripComponent implements OnInit {
  public newTrip: Trip;

  constructor() {
    this.newTrip = new Trip();
  }

  ngOnInit() {}

}
