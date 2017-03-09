import { Component, OnInit } from '@angular/core';
import {RepoDate} from './repoDate';
import {ReportService} from './report.service';
import {Expense} from "../expense/expense";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
	repoDate= new RepoDate();
	errorMessage:string="";
  private expenses: Expense[];
  private sum: number;

  constructor(private reportService:ReportService) { }

  ngOnInit() {

  }


repo(event:Event){
	event.preventDefault();
	// console.log(this.repoDate);
	this.reportService.reportDate(this.repoDate)
      .subscribe(
        serverresponse  => {

          this.expenses = <Expense[]>serverresponse.expenses;
          this.sum = <number>serverresponse.sum[0].actualSum;


        },
        error =>  {this.errorMessage = <string>error,alert(this.errorMessage)}

        );

}






}
