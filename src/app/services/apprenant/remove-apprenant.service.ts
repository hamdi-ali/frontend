
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Apprenant } from '../../models/apprenant'
@Injectable()
export class RemoveApprenantService {

  constructor(private http:Http) { }

  supprimerApprenant(apprenantId: number) {
  	let url = "http://localhost:8181/learner/remove";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, apprenantId,{headers: headers});
  }

}
