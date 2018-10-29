import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Apprenant } from '../../models/apprenant'
@Injectable()
export class AjoutApprenantService {

  constructor(private http:Http) { }

  ajouterApprenant(apprenant:Apprenant) {
  	let url = "http://localhost:8181/learner/add";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, JSON.stringify(apprenant), {headers: headers});
  }

}
