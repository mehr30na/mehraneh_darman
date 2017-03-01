import { Injectable } from '@angular/core';
import {  Http, Response} from "@angular/http";
import {RepoDate} from './repoDate';
import {  Observable} from "rxjs/Rx";


@Injectable()
export class ReportService {
	repoDate:RepoDate;

  constructor(private http: Http) { }

  private Url = 'http://localhost/mehraneh_darman/server/public/api/report';


  reportDate (repoDate: RepoDate): Observable<any> {
    console.log(repoDate);
    let s = repoDate.sdate.replace(/\//g, "-");
    let e = repoDate.edate.replace(/\//g, "-");
    this.Url = this.Url+'/'+s+'/'+e;
    console.log(this.Url);
    return this.http.get(this.Url)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let response = res.json();
    return response;
  }
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
