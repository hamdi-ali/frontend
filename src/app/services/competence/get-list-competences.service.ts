import { Injectable } from '@angular/core';
import { Skill } from '../../models/skill'
import { Http, Headers} from '@angular/http'
@Injectable()
export class GetListCompetencesService {

  constructor(private http: Http) { }

  getListCompetences() {
  	let url = "http://localhost:8181/skill/skillList";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }


}
