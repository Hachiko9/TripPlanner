import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import {NewExpenseModalComponent} from './new-expense-modal';

@NgModule({
    declarations: [
        NewExpenseModalComponent
    ],
    imports: [
        FormsModule,
        IonicModule,
        CommonModule
    ],
    entryComponents: [
        NewExpenseModalComponent
    ]
})

export class NewExpenseModalModule {}
