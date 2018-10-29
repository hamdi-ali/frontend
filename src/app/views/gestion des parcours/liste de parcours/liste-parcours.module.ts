import { NgModule } from '@angular/core';

import { ListeParcoursComponent } from './liste-parcours.component';
import { ListeParcoursRoutingModule } from './liste-parcours-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
        ListeParcoursRoutingModule, CommonModule 

    ],
    declarations: [
        ListeParcoursComponent,
    ]
})
export class ListeParcoursModule { }
