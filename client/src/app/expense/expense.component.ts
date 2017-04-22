import { Component, OnInit } from '@angular/core';
import {Expense} from "./expense";
import { ExpenseService } from './expense.service'
declare var $:any;

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  private loading:boolean;
  private modal_title:string;
  private expense = new Expense();
  private expenses:Expense[];
  private errorMessage:string;
  private total:number;
  private perpage:number;
  private pageNumbers:number = this.total%this.perpage;




  constructor(private expenseService:ExpenseService,) {

  }

  ngOnInit() {
    this.getExpenses();
  }


  getExpense(id) {
    this.loading=true;
    this.expenseService.getExpense(id).subscribe(
      serverresponse => {
        this.expense = <Expense>serverresponse,
          this.loading=false;
      },
      error => {this.errorMessage = <string>error}
    );
  }


  getExpenses() {
    this.loading=true;
    this.expenseService.getExpenses().subscribe(
      serverresponse => {
        // this.patients = <Patient[]>serverresponse.data,
        this.expenses = <Expense[]>serverresponse,

          console.log(this.expenses);
          this.loading=false;

      },
      error => {this.errorMessage = <string>error}

    );

  }



  saveExpense (id,event:Event) {
  // console.log(this.expense);
  event.preventDefault();
   // console.log(this.expense.cost_type);
  if (!this.expense) { return; }
  if(!id){
    this.modal_title = "ايجاد پرونده جديد";
    this.expenseService.saveExpenses(this.expense)
      .subscribe(
        serverresponse  => {this.getExpenses();
        $('.bs-example-modal-lg').modal('hide');
        alert('هزينه با موفقيت ثبت گرديد')},
        error =>  {this.errorMessage = <string>error,alert(this.errorMessage)});
  }
  else {
    this.modal_title = "ويرايش پرونده جديد";
    this.expenseService.updateExpense(id,this.expense)
      .subscribe(
        serverresponse  => {this.getExpenses();
        $('.bs-example-modal-lg').modal('hide');
        alert('هزينه با موفقيت ویرایش گرديد');this.expense.id=null;},
        error =>  this.errorMessage = <string>error);
  }

}


  deleteExpense (id) {

    if (confirm("آیا از حذف مطمئنید؟؟؟") == true) {
      this.expenseService.deleteExpense(id)
        .subscribe(
          serverresponse  => {this.getExpenses();},
          error =>  this.errorMessage = <string>error);
    }
    else {
      return;
    }

  }




}
