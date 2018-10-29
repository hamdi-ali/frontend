import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListePromotionsComponent } from './liste-promotions.component';

const routes: Routes = [
  {
    path: '',
    component: ListePromotionsComponent,
    data: {
      title: 'liste-promotions'
    }
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListePromotionsRoutingModule { }
