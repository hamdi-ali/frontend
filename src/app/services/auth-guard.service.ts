import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
//import { AuthenticationService } from './authentication.service';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthGuardService 
//implements CanActivate 
{

  constructor( public router: Router) {}

  /*canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> |boolean{

  }*/

}
