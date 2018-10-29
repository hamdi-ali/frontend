import { NgModule } from '@angular/core';

import { ListApprenantComponent } from './list-apprenant.component';
import { ListApprenantRoutingModule } from './list-apprenant-routing.module';
import {CommonModule} from '@angular/common';



@NgModule({
    imports: [
      ListApprenantRoutingModule, CommonModule

    ],
    declarations: [
      ListApprenantComponent
    ]
})
export class ListApprenantModule { }
