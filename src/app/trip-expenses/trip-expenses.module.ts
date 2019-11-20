import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {TripExpensesComponent} from './trip-expenses.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: TripExpensesComponent
            }
        ])
    ],
    declarations: [
        TripExpensesComponent
    ]
})
export class TripExpensesModule {}
