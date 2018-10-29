import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class GetPromotionService {
  constructor(private http:Http) { }

  getPromotion(id:number) {
  	let url = "http://localhost:8181/group/learnerListByGroupId/"+id;
    let headers = new Headers ({
      'Content-Type': 'application/json',
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }
}
