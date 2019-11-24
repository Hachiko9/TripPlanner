import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';


import {NewEventModalComponent} from './new-event-modal.component';

@NgModule({
    declarations: [
        NewEventModalComponent
    ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule
    ],
    entryComponents: [
        NewEventModalComponent
    ]
})

export class NewEventModalModule {}
