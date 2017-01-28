import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  saveExpense (id,event:Event) {

  event.preventDefault();
  // console.log(this.patient);
  if (!this.expense) { return; }
  if(!id){
    this.modal_title = "ايجاد پرونده جديد";
    this.patientService.savePatients(this.patient)
      .subscribe(
        serverresponse  => {this.patients.push(serverresponse); $('.bs-example-modal-lg').modal('hide');},
        error =>  this.errorMessage = <string>error);
  }
  else {
    this.modal_title = "ويرايش پرونده جديد";
    this.patientService.updatePatients(id,this.patient)
      .subscribe(
        serverresponse  => {this.getPatients();$('.bs-example-modal-lg').modal('hide');},
        error =>  this.errorMessage = <string>error);
  }

}



}
