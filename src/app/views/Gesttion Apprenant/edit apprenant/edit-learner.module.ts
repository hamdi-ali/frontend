import { NgModule } from '@angular/core';

import { EditLearnerComponent } from './edit-learner.component';
import { EditLearnerRoutingModule } from './edit-learner-routing.module';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';


@NgModule({
    imports: [
        EditLearnerRoutingModule,CommonModule,
      FormsModule

    ],
    declarations: [EditLearnerComponent
    ],
    providers: [  ]
})
export class EditLearnerModule { }
