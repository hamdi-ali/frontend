import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeCompetencesComponent } from './liste-competences.component';

const routes: Routes = [
  {
    path: '',
    component: ListeCompetencesComponent,
    data: {
      title: 'liste-competences'
    }
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListeCompetencesRoutingModule { }
