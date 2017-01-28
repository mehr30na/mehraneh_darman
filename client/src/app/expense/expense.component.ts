import { Component, OnInit } from '@angular/core';
import {Expense} from "./expense";
import { ExpenseService } from './expense.service'

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

  constructor(private expenseService:ExpenseService) { }

  ngOnInit() {
  }

  saveExpense (event:Event) {
  // console.log(this.expense);
  event.preventDefault();
  // console.log(this.patient);
  if (!this.expense) { return; }
  // if(!id){
    this.modal_title = "ايجاد پرونده جديد";
    this.expenseService.saveExpenses(this.expense)
      .subscribe(
        serverresponse  => {},
        error =>  this.errorMessage = <string>error);
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
