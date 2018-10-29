import { Component, OnInit } from '@angular/core';
import { Apprenant } from '../../../models/apprenant';
import { Router } from '@angular/router';
import {ApprenantService} from '../../../services/apprenant.service';
import { AjoutApprenantService } from '../../../services/apprenant/ajout-apprenant.service';
import { UploadImageService } from '../../../services/upload-image.service';

@Component({
  selector: 'app-add-new-learner',
  templateUrl: './add-new-learner.component.html'
})

export class AddNewLearnerComponent implements OnInit {
  public apprenant: Apprenant = new Apprenant();
  public apprenantAjoute: boolean;

  constructor(private _router: Router,
              private ajoutApprenantService: AjoutApprenantService,
              public uploadImageService: UploadImageService) {

  }

  ngOnInit() {
    this.apprenantAjoute=false;
  }
  ajouterApprenant(){
    this.ajoutApprenantService.ajouterApprenant(this.apprenant).subscribe(
      res => {
        this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
  			this.apprenantAjoute=true;
        this.apprenant = new Apprenant();
        this.apprenant.training_name = ''
        this.apprenant.groupName = ''
      },
      error =>{
        console.log(error);
      }
    )
  }
  /*processForm(){
    this._apprenantService.createApprenants(this.apprenant).subscribe((newLearner)=>{
        console.log(newLearner);
        this._router.navigate(['/list-apprenant']);
      },(error)=>{
        console.log(error);
      });
    /*}else
    {
      this._apprenantService.updateApprenants(this.apprenant).subscribe((apprenant)=>{
        console.log(apprenant);
        this._router.navigate(['/list-apprenant']);
      },(error)=>{
        console.log(error);
      });
    }*/
  }

