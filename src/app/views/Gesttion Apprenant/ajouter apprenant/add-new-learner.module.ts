import { NgModule } from '@angular/core';

import { AddNewLearnerComponent } from './add-new-learner.component';
import { AddNewLearnerRoutingModule } from './add-new-learner-routing.module';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
    imports: [
        AddNewLearnerRoutingModule,CommonModule,
      FormsModule

    ],
    declarations: [AddNewLearnerComponent
    ],
    providers: [  ]
})
export class AddNewLearnerModule { }
