import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Expense} from "./expense";
import {Observable} from "rxjs/Rx";


@Injectable()
export class ExpenseService {

  constructor(private http: Http) { }

  private Url = 'http://localhost:8000/api/expense';  // URL to web API

  saveExpenses (expense: Expense): Observable<any> {
    console.log(expense);
    return this.http.post(this.Url, expense)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // updateExpenses (expense: Expense): Observable<any> {
  //
  //   return this.http.put(this.Url+"/"+id, expense)
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }


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
