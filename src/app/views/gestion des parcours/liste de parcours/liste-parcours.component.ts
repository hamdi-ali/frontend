import { Component, OnInit } from '@angular/core';
import { Training } from '../../../models/training';
import { GetListParcoursService } from '../../../services/parcours/get-list-parcours.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-parcours',
  templateUrl: 'liste-parcours.component.html',

})
export class ListeParcoursComponent implements OnInit{

  private training : Training;
	private checked: boolean;
	private trainingList: Training[];
	private allChecked: boolean;
  private removeApprenantList: Training[] = new Array();
  constructor( private router: Router,
    private getListParcoursService: GetListParcoursService  ) { }

    ngOnInit() {
      this.getListParcoursService.getListParcours().subscribe(
        res => {
          console.log(res.json());
          this.trainingList=res.json();
        }, 
        error => {
          console.log(error);
        }
      );
    }
    onSelect(training : Training) {
      this.training=training;
      this.router.navigate(['viewParcours', this.training.trainingId]);
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
