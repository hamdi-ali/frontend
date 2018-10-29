import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Apprenant } from '../models/apprenant';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ApprenantService {
  private baseUrl: String = 'http://localhost:8181/learner';
  private headers = new Headers({'Content-Type' : 'application/json'});
  private options = new RequestOptions({headers: this.headers});
  private apprenant: Apprenant;

  constructor(private _http: Http) { }
  getApprenants() {
    return this._http.get(this.baseUrl+'/apprenants', this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  getApprenant(id:Number){
    return this._http.get(this.baseUrl+'/apprenant'+id, this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  deleteApprenant(id:Number){
    return this._http.delete(this.baseUrl+'/remove/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  createApprenants(apprenant:Apprenant){
    return this._http.post(this.baseUrl+'/apprenant',JSON.stringify(apprenant), this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  updateApprenants(apprenant:Apprenant) {
    return this._http.put(this.baseUrl+'/apprenant',JSON.stringify(apprenant), this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  errorHandler(error: Response) {
    return Observable.throw(error || 'SERVER ERROR');
  }
  setter( apprenant: Apprenant) {
    this.apprenant = apprenant;
  }
}
