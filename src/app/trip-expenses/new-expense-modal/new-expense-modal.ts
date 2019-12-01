import {Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Expense} from '../../models/Expense';

@Component({
    selector: 'new-expense-modal',
    templateUrl: './new-expense-modal.html',
    styleUrls: ['./new-expense-modal.scss'],
})
export class NewExpenseModalComponent implements OnInit {
    public expense: Expense = new Expense();

    constructor(private modalController: ModalController) {}

    ngOnInit() {}

    public saveExpense() {
        this.modalController.dismiss({
            dismissed: true,
            expense: this.expense
        });
    }
}
