import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';

import { PagesRoutingModule } from './pages-routing.module';
import { CookieService } from 'angular2-cookie/services/cookies.service'
@NgModule({
  imports: [ PagesRoutingModule, FormsModule, CommonModule ],
  declarations: [
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ]
})
export class PagesModule { }
