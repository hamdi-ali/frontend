import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class SupprimerCompetenceService {

  constructor(private http:Http) { }

  supprimerCompetence(competencetId: number) {
  	let url = "http://localhost:8181/skill/remove";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.post(url, competencetId,{headers: headers});
  }


}
