import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {User} from '../../models/user';

@Injectable()
export class ForgotPasswordService {

  constructor(private http:Http) { }

  retrievePassword(email:string) {
  	let url = 'http://localhost:8181/user/forgetPassword';
  	let userInfo = {
  		"email" : email
  	}
  	let tokenHeader = new Headers({
  		'Content-Type' : 'application/json',
  		'x-auth-token' : localStorage.getItem('xAuthToken')
  	});

  	return this.http.post(url, JSON.stringify(userInfo), {headers : tokenHeader});
  }

  newUser(username: string, email:string, firstName: string, lastName: string) {
	let url = 'http://localhost:8181/user/newUser';
	let userInfo = {
		"username" : username,
		"email" : email,
		"firstName" : firstName,
		"lastName" : lastName
	}
	let tokenHeader = new Headers({
		'Content-Type' : 'application/json',
		'x-auth-token' : localStorage.getItem('xAuthToken')
	});

	return this.http.post(url, JSON.stringify(userInfo), {headers : tokenHeader});
}

}
