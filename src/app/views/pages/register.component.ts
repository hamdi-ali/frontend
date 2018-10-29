import { Component } from '@angular/core';
import { User } from '../../models/user'
import { ForgotPasswordService } from '../../services/login/forgot-password.service'

import { Router } from '@angular/router';
@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  public user: User;
  
  private loginError:boolean = false;
  private loggedIn = false;
  private credential = {'username':'', 'password':''};

  private emailSent: boolean =false;
  private usernameExists:boolean;
  private emailExists:boolean;

  private username:string;
  private email:string;
  private firstName:string;
  private lasttName:string;
  private password:string;


  private emailNotExists: boolean =false;
  private forgetPasswordEmailSent: boolean;
  private recoverEmail:string;  

  constructor( private forgotPasswordService: ForgotPasswordService) { }

  onNewAccount() {
  	this.usernameExists = false;
  	this.emailExists = false;
  	this.emailSent = false;

  	this.forgotPasswordService.newUser(this.username, this.email, this.firstName, this.lasttName).subscribe(
  		res => {
  			console.log(res);
  			this.emailSent = true;
  		}, 
  		error => {
  			console.log(error.text());
  			let errorMessage = error.text();
  			if(errorMessage==="usernameExists") this.usernameExists=true;
  			if(errorMessage==="emailExists") this.emailExists=true;
  		}
  	);
  }


}
