import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Patient } from './Patient';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class PatientService {
  private Url = 'http://localhost:8000/api/patient';  // URL to web API
  constructor (private http: Http) {}


  getPatients (): Observable<any>{
    return this.http.get(this.Url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  savePatients (patient: Patient): Observable<any> {
    console.log(patient);
    // console.log(JSON.stringify(patient));
    // let data = JSON.stringify(patient);
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.Url, { patient }, options)
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
