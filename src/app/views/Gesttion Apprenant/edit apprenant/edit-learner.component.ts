import { Component, OnInit } from '@angular/core';
import { Apprenant } from '../../../models/apprenant';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GetApprenantService } from '../../../services/apprenant/get-apprenant.service';
import { UploadImageService } from '../../../services/upload-image.service';
import { EditApprenantService } from '../../../services/apprenant/edit-apprenant.service'
@Component({
  selector: 'app-edit-learner',
  templateUrl: './edit-learner.component.html'
})

export class EditLearnerComponent implements OnInit {
  private apprenantId: number;
  public apprenant: Apprenant = new Apprenant();
  public learnerUpdated: boolean;

  constructor(private _router: Router,
              private route: ActivatedRoute,
              private editApprenantService: EditApprenantService,
              private getApprenantService: GetApprenantService,
              public uploadImageService: UploadImageService) {

  }

  onSubmit() {
  	this.editApprenantService.editApprenant(this.apprenant).subscribe(
  		data => {
  			this.uploadImageService.modify(JSON.parse(JSON.parse(JSON.stringify(data))._body).id);
  			this.learnerUpdated=true;
  		},
  		error => console.log(error)
  	);
  }

  ngOnInit() {
    this.learnerUpdated=false;
    this.route.params.forEach((params: Params) =>{
      this.apprenantId = Number.parseInt(params['id'])
    });
    this.getApprenantService.getApprenant(this.apprenantId).subscribe(
      res => {
      this.apprenant = res.json();  
      },
      error=>console.log(error)
    )
  }
  /*ajouterApprenant(){
    this.ajoutApprenantService.ajouterApprenant(this.apprenant).subscribe(
      res => {
        this.uploadImageService.upload(JSON.parse(JSON.parse(JSON.stringify(res))._body).id);
  			this.learnerUpdated=true;
        this.apprenant = new Apprenant();
        this.apprenant.training_name = ''
        this.apprenant.groupName = ''
      },
      error =>{
        console.log(error);
      }
    )
  }*/
  
  }

