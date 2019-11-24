import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { CalendarModule } from 'ion2-calendar';

import {NewTripDatesModalComponent} from './new-trip-dates-modal';

@NgModule({
    declarations: [
        NewTripDatesModalComponent
    ],
    imports: [
        IonicModule,
        FormsModule,
        CalendarModule,
        CommonModule
    ],
    entryComponents: [
        NewTripDatesModalComponent
    ]
})

export class NewTripDatesModalModule {}
