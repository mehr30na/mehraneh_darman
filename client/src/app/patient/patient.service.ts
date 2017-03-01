import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Patient } from './patient';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PatientService {

  constructor(private http: Http) { }


  private Url = 'http://localhost/mehraneh_darman2/server/public/api/patient';  // URL to web API
  // private Url = 'http://localhost:8000/api/patient';  // URL to web API

  getPatient(id): Observable<Patient>{
    return this.http.get(this.Url+"/"+id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPatients (): Observable<any>{
    return this.http.get(this.Url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  savePatients (patient: Patient): Observable<any> {

    return this.http.post(this.Url, patient)
      .map(this.extractData)
      .catch(this.handleError);
  }

  updatePatients (id,patient: Patient): Observable<any> {

    return this.http.put(this.Url+"/"+id, patient)
      .map(this.extractData)
      .catch(this.handleError);
  }

  deletePatient(id): Observable<any> {

    return this.http.delete(this.Url+"/"+id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  searchPatient(term): Observable<any> {

    return this.http.get(this.Url+"/search/"+term)
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
