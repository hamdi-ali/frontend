import { NgModule } from '@angular/core';

import { DetailCompetenceComponent } from './detail-competence.component';
import { DetailCompetenceRoutingModule } from './detail-competence-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        DetailCompetenceRoutingModule, CommonModule, FormsModule

    ],
    declarations: [
        DetailCompetenceComponent,
    ],
    providers: [  ]
})
export class DetailCompetenceModule { }
