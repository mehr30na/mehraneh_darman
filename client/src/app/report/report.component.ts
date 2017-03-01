import { Component, OnInit } from '@angular/core';
import {RepoDate} from './repoDate';
import {ReportService} from './report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
	repoDate= new RepoDate();
	errorMessage:string="";

  constructor(private reportService:ReportService) { }

  ngOnInit() {
  }


repo(event:Event){
	event.preventDefault();
	// console.log(this.repoDate);
	this.reportService.reportDate(this.repoDate)
      .subscribe(
        serverresponse  => { this.errorMessage = serverresponse},
        error =>  {this.errorMessage = <string>error,alert(this.errorMessage)}
        
        );

}






}
