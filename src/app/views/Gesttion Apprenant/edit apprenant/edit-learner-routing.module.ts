import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditLearnerComponent } from './edit-learner.component';

const routes: Routes = [
  {
    path: '',
    component: EditLearnerComponent,
    data: {
      title: 'edit-learner'
    }
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EditLearnerRoutingModule { }
