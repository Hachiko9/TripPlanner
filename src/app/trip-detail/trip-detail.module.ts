import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {TripDaysScrollComponent} from '../trip-days-scroll/trip-days-scroll.component';
import { NgCalendarModule  } from 'ionic2-calendar';
import { TripExpensesComponent } from '../trip-expenses/trip-expenses.component';
import { TripGalleryComponent } from '../trip-gallery/trip-gallery.component';
import { TripPlannerComponent } from '../trip-planner/trip-planner.component';
import { TripDetailComponent } from './trip-detail.component';
import { NewExpenseModalModel } from '../trip-expenses/new-expense-modal/new-expense-modal.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        NgCalendarModule,
        NewExpenseModalModel,
        RouterModule.forChild([
            {
                path: '',
                component: TripDetailComponent,
                children: [
                    {
                        path: 'planner',
                        component: TripPlannerComponent
                    },
                    {
                        path: 'expenses',
                        component: TripExpensesComponent
                    },
                    {
                        path: 'gallery',
                        component: TripGalleryComponent
                    }
                ]
            }
        ])
    ],
    entryComponents: [],
    declarations: [
        TripDaysScrollComponent,
        TripDetailComponent,
        TripExpensesComponent,
        TripGalleryComponent,
        TripPlannerComponent
    ]
})
export class TripDetailModule {}
