import { NgModule } from '@angular/core';

import { ListeCompetencesComponent } from './liste-competences.component';
import { ListeCompetencesRoutingModule } from './liste-competences-routing.module';
import {CommonModule} from '@angular/common';



@NgModule({
    imports: [
      ListeCompetencesRoutingModule, CommonModule

    ],
    declarations: [
      ListeCompetencesComponent
    ]
})
export class ListeCompetencesModule { }
