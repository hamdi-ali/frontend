import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeParcoursComponent } from './liste-parcours.component';

const routes: Routes = [
    {
        path: '',
        component: ListeParcoursComponent,
        data: {
          title: 'training-list'
        }
      }
    ];






@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListeParcoursRoutingModule { }
