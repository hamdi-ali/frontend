import { Component, OnInit } from '@angular/core';
import { Skill } from '../../../models/skill';
import { Typeformation } from '../../../models/typeformation'
import { Formation } from '../../../models/formation'
import { GetCompetenceService } from '../../../services/competence/get-competence.service'
import { Router, Params, ActivatedRoute } from '@angular/router';
import { GetTypeFormationByIdService } from '../../../services/competence/get-type-formation-by-id.service'
@Component({
  selector: 'app-detail-competence',
  templateUrl: 'detail-competence.component.html',

})
export class DetailCompetenceComponent implements OnInit{

  public skill : Skill = new Skill();
  private skillId: number;
  public typeformation : Typeformation = new Typeformation();
  public formations: Formation [] ;
	/*private checked: boolean;
	private trainingList: Training[];
	private allChecked: boolean;
  private removeApprenantList: Training[] = new Array();*/
  constructor( private router: Router,
               public getCompetenceService: GetCompetenceService,private route:ActivatedRoute,
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
        this.skillId = Number.parseInt(params['id']);
      });
  
      this.getCompetenceService.getCompetence(this.skillId).subscribe(
        res => {
          this.skill = res.json();
          console.log('skill : ', this.skill)
        for ( let item of this.skill.formations){
          console.log('item :', item.typeFormation.name)
        }
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
