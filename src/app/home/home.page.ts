import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nextTripDetails: string = '<div class="home-button-details">\n' +
      '  <h5>\n' +
      '    Next trip: \n' +
      '  </h5>\n' +
      '  <p>\n' +
      '    Where:\n' +
      '  </p>\n' +
      '  <p>\n' +
      '    When:\n' +
      '  </p>\n' +
      '</div>';
  constructor() {}
}
