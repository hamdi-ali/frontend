import { NgModule } from '@angular/core';

import { DetailParcoursComponent } from './detail-parcours.component';
import { DetailParcoursRoutingModule } from './detail-parcours-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        DetailParcoursRoutingModule, CommonModule, FormsModule

    ],
    declarations: [
        DetailParcoursComponent,
    ],
    providers: [  ]
})
export class DetailParcoursModule { }
