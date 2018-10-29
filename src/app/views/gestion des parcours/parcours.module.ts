import { NgModule } from '@angular/core';

import { ParcoursComponent } from './parcours.component';
import { ParcoursRoutingModule } from './parcours-routing.module';



@NgModule({
    imports: [
        ParcoursRoutingModule

    ],
    declarations: [
        ParcoursComponent,
    ]
})
export class ParcoursModule { }
