import { Component, OnInit } from '@angular/core';
import { Apprenant } from '../../../models/apprenant';
import { GetApprenantService } from '../../../services/apprenant/get-apprenant.service'
import { Router, Params, ActivatedRoute } from '@angular/router';
import { UploadImageService } from '../../../services/upload-image.service'
@Component({
  selector: 'app-profil-apprenant',
  templateUrl: 'profil-apprenant.component.html',

})
export class ProfilApprenantComponent implements OnInit{

  private apprenant : Apprenant = new Apprenant();
  private apprenantId: number;
	/*private checked: boolean;
	private trainingList: Training[];
	private allChecked: boolean;
  private removeApprenantList: Training[] = new Array();*/
  constructor( private _router: Router,
    public getApprenantService: GetApprenantService,private route:ActivatedRoute,
    public uploadImageService: UploadImageService  ) { }

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
        this.apprenantId = Number.parseInt(params['id']);
      });
  
      this.getApprenantService.getApprenant(this.apprenantId).subscribe(
        res => {
          this.apprenant = res.json();
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
