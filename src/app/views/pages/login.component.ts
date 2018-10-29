import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service'
import { CookieService } from 'angular2-cookie/services/cookies.service'
import { ForgotPasswordService} from '../../services/login/forgot-password.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit  {
  public credential = {'username': '', 'password': ''};
  public loggedIn = false;

  private loginError:boolean = false;

  private emailSent: boolean =false;
  private usernameExists:boolean;
  private emailExists:boolean;
  private username:string;
  private email:string;

  private emailNotExists: boolean =false;
  private forgetPasswordEmailSent: boolean;
  private recoverEmail:string;  

  constructor( private forgetPasswordService: ForgotPasswordService, private router: Router, private loginService: LoginService, public cookieService: CookieService) { }
  
  onSubmit() {
    this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('xAuthToken', res.json().token);
        this.loggedIn = true;
        this.router.navigateByUrl('/dashboard'); // if it is an admin or monitor
      //this.router.navigateByUrl('/profile'); // if it is a learner
        //location.reload();
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      },
      error => {
        this.loggedIn = false;
      }
    );
  }
  forgetpassword(){
    this.router.navigateByUrl('/pages/forgot-password')
  }
}
