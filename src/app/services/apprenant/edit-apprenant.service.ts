import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Apprenant } from '../../models/apprenant'

@Injectable()
export class EditApprenantService {

  constructor( private http: Http) { }

  editApprenant(apprenant: Apprenant){
    let url = "http://localhost:8181/learner/update";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(apprenant), {headers: headers});
  }
  

}
