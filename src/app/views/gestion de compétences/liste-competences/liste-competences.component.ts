import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetListCompetencesService } from '../../../services/competence/get-list-competences.service'
import { Skill } from '../../../models/skill';
import { SupprimerCompetenceService } from '../../../services/competence/supprimer-competence.service'

@Component({
  selector: 'app-liste-competences',
  templateUrl: './liste-competences.component.html'
})
export class ListeCompetencesComponent implements OnInit {


  private selectedSkill : Skill;
	private checked: boolean;
	private skillList: Skill[];
	private allChecked: boolean;
  private removeApprenantList: Skill[] = new Array();
  
  constructor(private router: Router,
              private getListCompetencesService: GetListCompetencesService,
              private supprimerCompetenceService: SupprimerCompetenceService  ) { }

               ngOnInit() {
                this.getListCompetencesService.getListCompetences().subscribe(
                  res => {
                    console.log(res.json());
                    this.skillList=res.json();
                  }, 
                  error => {
                    console.log(error);
                  }
                );
              }
              onSelect(skill : Skill) {
                this.selectedSkill=skill;
                this.router.navigate(['/viewSkill/', this.selectedSkill.skillId]);
              }
              deleteSkill( selectedSkill: Skill ) {
                /*this._apprenantService.deleteApprenant(selectedApprenant.id).subscribe((data) => {
                  this.apprenants.splice(this.apprenants.indexOf(selectedApprenant),1);
            */
            this.supprimerCompetenceService.supprimerCompetence(selectedSkill.skillId).subscribe(
                res=>{
                  console.log(res);
                  location.reload();
                } 
                , (error) => {
                  console.log(error);
            
                });
            
              }

}
