import { Injectable } from '@angular/core';
import { Apprenant } from '../../models/apprenant'
import { Http, Headers} from '@angular/http'
@Injectable()
export class GetListApprenantService {

  constructor(private http: Http) { }

  getListApprenant() {
  	let url = "http://localhost:8181/learner/learnerList";
    let basicAuth = localStorage.getItem('basicAuth');
    let headers = new Headers ({
      'Authorization' : basicAuth
    });
    console.log("tt : ", headers)

    return this.http.get(url, {headers: headers});
  }


}
