import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { Patient } from "./patient";
import {ExpenseService} from "../expense/expense.service";
import {Expense} from "../expense/expense";
declare var $:any;

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  private loading:boolean;
  private patients:Patient[];
  private errorMessage:string;
  private patient = new Patient();
  private modal_title:string;
  private searchTerm:string = "";
  expenses: Expense[];
  private expense: Expense;


  constructor(private patientService: PatientService,
              private expenseService:ExpenseService

  ) { }

  ngOnInit() {
    this.getPatients();
  }

  getPatient(id) {

    this.loading=true;
    this.patientService.getPatient(id).subscribe(
      serverresponse => {
        // this.patients = <Patient[]>serverresponse.data,
        this.patient = <Patient>serverresponse,
          //this.total = <number>serverresponse.total,
          // console.log(this.patients);
          this.loading=false;

      },
      error => {this.errorMessage = <string>error}

    );

  }

  getPatients() {
    this.loading=true;
    this.patientService.getPatients().subscribe(
      serverresponse => {
        // this.patients = <Patient[]>serverresponse.data,
        this.patients = <Patient[]>serverresponse,
          //this.total = <number>serverresponse.total,
          console.log(this.patients);
          this.loading=false;

      },
      error => {this.errorMessage = <string>error}

    );

  }

  savePatients (id,event:Event) {

  event.preventDefault();
  // console.log(this.patient);
  if (!this.patient) { return; }
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

  deletePatient (id) {

    if (confirm("آیا از حذف مطمئنید؟؟؟") == true) {
      this.patientService.deletePatient(id)
        .subscribe(
          serverresponse  => {this.getPatients();},
          error =>  this.errorMessage = <string>error);
    }
    else {
      return;
    }

  }

  search(){
    this.loading=true;
    console.log(this.searchTerm);
    this.patientService.searchPatient(this.searchTerm).subscribe(
      serverresponse => {
        // this.patients = <Patient[]>serverresponse.data,
        this.patients = <Patient[]>serverresponse,
          //this.total = <number>serverresponse.total,
          // console.log(this.patients);
          this.loading=false;

      },
      error => {this.errorMessage = <string>error}

    );

  }

  getExpense(id) {
    this.modal_title = " ویرایش هزینه ها";
    this.loading=true;
    this.expenseService.getExpense(id).subscribe(
      serverresponse => {
        this.expense = <Expense>serverresponse,
          this.loading=false;
      },
      error => {this.errorMessage = <string>error}
    );
  }
  getExpenseByFile(filenum){
    this.loading=true;
    this.modal_title = " هزینه های پرونده شماره"+filenum;
    this.expenseService.getExpenseByFile(filenum).subscribe(
      serverresponse => {
        this.expenses = <Expense[]>serverresponse,
          this.loading=false;
      },
      error => {this.errorMessage = <string>error}
    );
  }

}
