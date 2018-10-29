import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCompetenceComponent } from './detail-competence.component';

const routes: Routes = [
    {
        path: '',
        component: DetailCompetenceComponent,
        data: {
          title: 'detail-compétence'
        }
      }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailCompetenceRoutingModule { }
