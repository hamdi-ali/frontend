import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewLearnerComponent } from './add-new-training.component';

const routes: Routes = [
  {
    path: '',
    component: AddNewLearnerComponent,
    data: {
      title: 'add-new-learner'
    }
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddNewTrainingRoutingModule { }
