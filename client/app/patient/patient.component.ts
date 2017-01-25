import { Component, Output,EventEmitter  } from '@angular/core';
import { Patient } from './Patient';
import { PatientService } from './patient.service'


@Component ({
	selector: 'patient-component',
	templateUrl:'app/patient/patient.component.html'

})


export class PatientComponent {

	response:any;
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
  loading:boolean;

  @Output() onLoad = new EventEmitter();

	constructor (private patientService: PatientService) {

  }

	ngOnInit() { this.getPatients(); }

	getPatients() {
    this.loading=true;
		this.patientService.getPatients().subscribe(
			serverresponse => {
				this.patients = <Patient[]>serverresponse.data,
				this.total = <number>serverresponse.total,
				console.log(this.patients);
        this.loading=false;

			},
			error => {this.errorMessage = <string>error}

			);
    this.onLoad.emit(false);

	}
}
