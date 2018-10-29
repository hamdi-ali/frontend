import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetListPromotionsService } from '../../../services/promotion/get-list-promotions.service'
import { Group } from '../../../models/group';
@Component({
  selector: 'app-liste-promotions',
  templateUrl: './liste-promotions.component.html'
})
export class ListePromotionsComponent implements OnInit {


  public selectedGroup : Group;

	private checked: boolean;
	public groupList: Group[];
	public allChecked: boolean;
  public removePromotionList: Group[] = new Array();
  
  constructor(private router: Router,
              public getListPromotionsService: GetListPromotionsService  ) { }

               ngOnInit() {
                this.getListPromotionsService.getListPromotions().subscribe(
                  res => {
                    console.log(res.json());
                    this.groupList=res.json();
                  }, 
                  error => {
                    console.log(error);
                  }
                );
              }
              onSelect(group : Group) {
                this.selectedGroup=group;
                this.router.navigate(['/viewPromotion/', this.selectedGroup.groupId]);
              }
    /*this._apprenantService.getApprenants().subscribe((apprenants)=>{
      console.log(apprenants);
      this.apprenants = apprenants;
    }, (error) => {
      console.log(error);
    })
  }*/
  /*deleteApprenant( apprenant ) {
    this._apprenantService.deleteApprenant(apprenant.id).subscribe((data) => {
      this.apprenants.splice(this.apprenants.indexOf(apprenant),1);

    }, (error) => {
      console.log(error);

    });

  }

  updateApprenant(apprenant){
    this._apprenantService.setter(apprenant);
    //this._router.navigate(['/apprenant-form']);
  }
  ajouterApprenant() {
    const apprenant = new Apprenant;
    this._apprenantService.setter(apprenant);
    this._router.navigate(['/add-new-learner']);
  }*/

}
