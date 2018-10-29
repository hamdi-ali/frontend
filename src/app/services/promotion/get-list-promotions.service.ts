import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http'
import { Group } from '../../models/group'

@Injectable()
export class GetListPromotionsService {

  constructor(private http: Http) { }

  getListPromotions() {
  	let url = "http://localhost:8181/group/groupList";
    
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }
}
