import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trip-summary',
  templateUrl: './trip-summary.component.html',
  styleUrls: ['./trip-summary.component.scss'],
})
export class TripSummaryComponent implements OnInit {

  @Input() city: string;
  @Input() dates: {from: string, to: string};

  constructor() { }

  ngOnInit() {}

}
