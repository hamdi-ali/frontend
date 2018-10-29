import { Component } from '@angular/core';
import { ForgotPasswordService} from '../../services/login/forgot-password.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'forgot-password.component.html'
})
export class ForgotPasswordComponent {
  private loginError:boolean = false;
  private loggedIn = false;
  private credential = {'username':'', 'password':''};

  private emailSent: boolean =false;
  private usernameExists:boolean;
  private emailExists:boolean;
  private username:string;
  private email:string;

  private emailNotExists: boolean =false;
  private forgetPasswordEmailSent: boolean;
  private recoverEmail:string;  

  constructor( private forgetPasswordService: ForgotPasswordService,
  	private router: Router ) { }

  onForgetPassword() {
  	this.forgetPasswordEmailSent = false;
  	this.emailNotExists = false;

  	this.forgetPasswordService.retrievePassword(this.recoverEmail).subscribe(
  		res => {
  			console.log(res);
  			this.forgetPasswordEmailSent = true;
  		},
  		error => {
  			console.log(error.text());
  			let errorMessage = error.text();
  			if(errorMessage==="Email not found") this.emailNotExists=true;
  		}
  	);
  }

}
