import { Component } from '@angular/core';
import { LoginService } from '../../services/login/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent { 
  constructor(private router: Router, private loginService: LoginService) { }

  logout(){
    this.loginService.logout()
  }
}
