import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListApprenantComponent } from './list-apprenant.component';

const routes: Routes = [
  {
    path: '',
    component: ListApprenantComponent,
    data: {
      title: 'liste-apprenants'
    }
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListApprenantRoutingModule { }
