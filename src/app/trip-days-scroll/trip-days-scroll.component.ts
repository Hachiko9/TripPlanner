import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-days-scroll',
  templateUrl: './trip-days-scroll.component.html',
  styleUrls: ['./trip-days-scroll.component.scss'],
})
export class TripDaysScrollComponent implements OnInit {
  public mockedDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() { }

  ngOnInit() {}

}
