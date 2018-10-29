import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilApprenantComponent } from './profil-apprenant.component';

const routes: Routes = [
    {
        path: '',
        component: ProfilApprenantComponent,
        data: {
          title: 'profile'
        }
      }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProfilApprenantRoutingModule { }
