import { Component, OnInit } from '@angular/core';
import { ApprenantService } from '../../../services/apprenant.service';
import { Apprenant } from '../../../models/apprenant';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login/login.service'
import { GetListApprenantService } from '../../../services/apprenant/get-list-apprenant.service'
import { RemoveApprenantService } from '../../../services/apprenant/remove-apprenant.service'

@Component({
  selector: 'app-list-apprenant',
  templateUrl: './list-apprenant.component.html'
})
export class ListApprenantComponent implements OnInit {

  private apprenant: Apprenant = new Apprenant();
  private apprenants : Apprenant[];
  private selectedApprenant : Apprenant;
	private checked: boolean;
	private apprenantList: Apprenant[];
	private allChecked: boolean;
  private removeApprenantList: Apprenant[] = new Array();
  
  constructor( private _apprenantService: ApprenantService, private _router: Router, private removeApprenantService: RemoveApprenantService,
              private getListApprenantService: GetListApprenantService  ) { }

              ngOnInit() {
                this.getListApprenantService.getListApprenant().subscribe(
                  res => {
                    console.log(res.json());
                    this.apprenantList=res.json();
                  }, 
                  error => {
                    console.log(error);
                  }
                );
              }
    /*this._apprenantService.getApprenants().subscribe((apprenants)=>{
      console.log(apprenants);
      this.apprenants = apprenants;
    }, (error) => {
      console.log(error);
    })
  }*/
  deleteApprenant( selectedApprenant: Apprenant ) {
    /*this._apprenantService.deleteApprenant(selectedApprenant.id).subscribe((data) => {
      this.apprenants.splice(this.apprenants.indexOf(selectedApprenant),1);
*/
this.removeApprenantService.supprimerApprenant(selectedApprenant.id).subscribe(
    res=>{
      console.log(res);
      location.reload();
    } 
    , (error) => {
      console.log(error);

    });

  }

  editApprenant(apprenant: Apprenant){

    this._router.navigate(['/edit-learner', this.apprenant.id]);
  }
  ajouterApprenant() {
    const apprenant = new Apprenant;
    this._apprenantService.setter(apprenant);
    this._router.navigate(['/add-new-learner']);
  }

}
