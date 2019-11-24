import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import {NewTripComponent} from './new-trip.component';
import {NewTripDatesModalModule} from './new-trip-dates-modal/new-trip-dates-modal.module';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NewTripDatesModalModule,
        RouterModule.forChild([
            {
                path: '',
                component: NewTripComponent
            }
        ])
    ],
    declarations: [NewTripComponent]
})
export class NewTripModule {}
