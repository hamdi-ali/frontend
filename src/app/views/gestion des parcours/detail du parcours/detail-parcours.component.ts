import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../models/skill';
import { Typeformation } from '../../../models/typeformation'
import { Training } from '../../../models/training'
import { GetParcoursService } from '../../../services/parcours/get-parcours.service'
import { Router, Params, ActivatedRoute } from '@angular/router';
import { GetTypeFormationByIdService } from '../../../services/competence/get-type-formation-by-id.service'
@Component({
  selector: 'app-detail-parcours',
  templateUrl: 'detail-parcours.component.html',

})
export class DetailParcoursComponent implements OnInit{
  public skill: Skill = new Skill();
  public training : Training = new Training();
  private trainingId: number;
  public typeformation : Typeformation = new Typeformation();
  public formations: Training [] ;
	/*private checked: boolean;
	private trainingList: Training[];
	private allChecked: boolean;
  private removeApprenantList: Training[] = new Array();*/
  constructor( private router: Router,
               public getParcoursService: GetParcoursService,private route:ActivatedRoute,
               public getTypeFormationByIdService: GetTypeFormationByIdService
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
        this.trainingId = Number.parseInt(params['id']);
      });
  
      this.getParcoursService.getParcours(this.trainingId).subscribe(
        res => {
          this.training = res.json();
          console.log('training : ', this.training)
        for ( let item of this.training.trainingSkills){
          console.log('item :', item)
         /* for ( let item of this.training.trainingSkills){
            console.log('item :', item.)
        }*/}
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
