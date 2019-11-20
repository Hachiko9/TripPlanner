import {Expense} from './Expense';

export class Trip {
    _id: string;
    city: string;
    fromDate: string;
    toDate: string;
    participants: string[];
    accommodation: string;
    pictures: string[];
    expenses: Expense[];
}
