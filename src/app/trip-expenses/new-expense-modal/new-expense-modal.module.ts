import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';

import {NewExpenseModalComponent} from './new-expense-modal';

@NgModule({
    declarations: [
        NewExpenseModalComponent
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    entryComponents: [
        NewExpenseModalComponent
    ]
})

export class NewExpenseModalModule {}
