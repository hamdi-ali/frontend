import { Injectable } from '@angular/core';
import { Training } from '../../models/training'
import { Http, Headers} from '@angular/http'
@Injectable()
export class GetListParcoursService {

  constructor(private http: Http) { }

  getListParcours() {
  	let url = "http://localhost:8181/training/trainingList";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }


}
