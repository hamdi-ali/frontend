import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class GetCompetenceService {

  constructor(private http:Http) { }

  getCompetence(id:number) {
  	let url = "http://localhost:8181/skill/findSkill/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }

}
