import { Component, OnInit } from '@angular/core';
import { Group } from '../../../models/group';
import { Typeformation } from '../../../models/typeformation'
import { Formation } from '../../../models/formation'
import { GetPromotionService } from '../../../services/promotion/get-promotion.service'
import { Router, Params, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-promotion',
  templateUrl: 'detail-promotion.component.html',

})
export class DetailPromotionComponent implements OnInit{

  public group : Group = new Group();
  private groupId: number;
  public typeformation : Typeformation = new Typeformation();
  public formation: Formation ;
	/*private checked: boolean;
	private trainingList: Training[];
	private allChecked: boolean;
  private removeApprenantList: Training[] = new Array();*/
  constructor( private router: Router,
    public getPromotionService: GetPromotionService,private route:ActivatedRoute
    ) { }

    ngOnInit() {
      /*this.uploadImageService.upload.subscribe(
        res => {
          console.log(res.json());
          this.apprenant=res.json();
        }, 
        error => {
          console.log(error);
        }
      );*/
      this.route.params.forEach((params: Params) => {
        this.groupId = Number.parseInt(params['id']);
      });
  
      this.getPromotionService.getPromotion(this.groupId).subscribe(
        res => {
          this.group = res.json();
        },
        error => {
          console.log(error);
        }
      );
  
    }
    /*deleteApprenant(apprenant){
      this._apprenantService.deleteApprenant(apprenant.id).subscribe((data)=>{
        this.trainingList.splice(this.trainingList.indexOf(apprenant),1);
        
      },(error)=>{
        console.log(error);
  
      });
    
    }  
  
  updateApprenant(apprenant){
  this._apprenantService.setter(apprenant); 
  this._router.navigate(['/apprenant-form']);
  }

    deleteTraining(training){
      this._apprenantService.deleteApprenant(training.id).subscribe((data)=>{
        this.apprenants.splice(this.apprenants.indexOf(apprenant),1);
        
      },(error)=>{
        console.log(error);
  
      });
    
    }
    updateTraining(training){}  
*/

}
