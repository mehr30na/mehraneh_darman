import { Component, OnInit } from '@angular/core';
import {Expense} from "./expense";
import { ExpenseService } from './expense.service'
import {PersianCalendarService} from '../shared/persinDate/PersianCalendarService';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  private modal_title:string;
  private expense = new Expense();
  private expenses:Expense[];
  private errorMessage:string;

  

  constructor(private expenseService:ExpenseService, public persianCalendarService: PersianCalendarService) {

  }

  ngOnInit() {
  }

  

  saveExpense (event:Event) {
  // console.log(this.expense);
  event.preventDefault();
   // console.log(this.expense.cost_type);
  if (!this.expense) { return; }
  // if(!id){
    this.modal_title = "ايجاد پرونده جديد";
    this.expenseService.saveExpenses(this.expense)
      .subscribe(
        serverresponse  => {alert('هزينه با موفقيت ثبت گرديد')},
        error =>  {this.errorMessage = <string>error,alert(this.errorMessage)});
  // }
  // else {
  //   this.modal_title = "ويرايش پرونده جديد";
  //   this.expenseService.updateExpenses(id,this.expense)
  //     .subscribe(
  //       serverresponse  => {},
  //       error =>  this.errorMessage = <string>error);
  // }

}

 


}
