import { NgModule } from '@angular/core';

import { ProfilApprenantComponent } from './profil-apprenant.component';
import { ProfilApprenantRoutingModule } from './profil-apprenant-routing.module';
import {CommonModule} from '@angular/common';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
    imports: [
        ProfilApprenantRoutingModule, CommonModule, AvatarModule

    ],
    declarations: [
        ProfilApprenantComponent,
    ],
    providers: [  ]
})
export class ProfilApprenantModule { }
