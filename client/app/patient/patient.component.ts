import { Component, Output,EventEmitter  } from '@angular/core';
import { Patient } from './Patient';
import { PatientService } from './patient.service';
// import { FormBuilder, Validators } from '@angular/forms';





@Component ({
	selector: 'patient-component',
	templateUrl:'app/patient/patient.component.html'

})


export class PatientComponent {

	// public patientForm = this.fb.group({
		
	// 	fullname: ["", Validators.required],
	// 	national_code: ["", Validators.required],
	// 	idcrd_number: ["", Validators.required],
	// 	birt_hdate: ["", Validators.required],
	// 	father_name: ["", Validators.required],
	// 	birth_place: ["", Validators.required],
	// 	living_place: ["", Validators.required],
	// 	file_number: ["", Validators.required],
	// 	gender: ["", Validators.required],
	// 	phone: ["", Validators.required],
	// 	mobile: ["", Validators.required],
	// 	cancer_type: ["", Validators.required],
	// 	marital_status: ["", Validators.required],
	// 	doctor_name: ["", Validators.required],
	// 	picture: ["", Validators.required],
		
	// });

	response:any;
	errorMessage: string;
	patients: Patient[];
	patient = new Patient();

	

	total: number;
	current_page: number;
	from: number;
	to:number;
	last_page:number;
	next_page_url: string;
	prev_page_url:string;
	per_page:number;
	loading:boolean;

// public fb: FormBuilder
	constructor (private patientService: PatientService, ) {

	}

	ngOnInit() { 
		this.getPatients();
		
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

	savePatients () {
	// let	patient = this.patientForm.value;
    if (!patient) { return; }
    this.patientService.savePatients(patient)
                     .subscribe(
                       serverresponse  => {this.patients.push(serverresponse),console.log(serverresponse);},
                       error =>  this.errorMessage = <string>error);
  }


}
