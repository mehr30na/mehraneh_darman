import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient.service';
import { Patient } from "./patient";
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


  constructor(private patientService: PatientService) { }

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
          // console.log(this.patients);
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
    this.patientService.savePatients(this.patient)
      .subscribe(
        serverresponse  => {this.patients.push(serverresponse); $('.bs-example-modal-lg').modal('hide');},
        error =>  this.errorMessage = <string>error);
  }
  else {
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

}
