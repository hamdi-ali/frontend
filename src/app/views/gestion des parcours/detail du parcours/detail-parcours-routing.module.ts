import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailParcoursComponent } from './detail-parcours.component';

const routes: Routes = [
    {
        path: '',
        component: DetailParcoursComponent,
        data: {
          title: 'detail-parcours'
        }
      }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailParcoursRoutingModule { }
