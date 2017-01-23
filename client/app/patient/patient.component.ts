import { Component } from '@angular/core';
import { Patient } from './Patient';
import { PatientService } from './patient.service'


@Component ({
	selector: 'patient-component',
	templateUrl:'app/patient/patient.component.html'

})


export class PatientComponent {

	errorMessage: string;
	patients: Patient[];

	total: number;
	current_page: number;
	from: number;
	to:number;
	last_page:number;
	next_page_url: string;
	prev_page_url:string;
	per_page:number;


	constructor (private patientService: PatientService) {}

	ngOnInit() { this.getPatients(); }

	getPatients() {
		this.patientService.getPatients().subscribe(
			patients => this.patients = patients,
			error =>  this.errorMessage = <any>error
			);
		console.log()
	}
}