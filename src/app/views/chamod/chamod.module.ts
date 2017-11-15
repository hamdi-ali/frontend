import { NgModule } from '@angular/core';

import { ChamodComponent } from './chamod.component';
import { NewComponent } from './new.component';
import { ChamodRoutingModule } from './chamod-routing.module';



@NgModule({
    imports: [
        ChamodRoutingModule

    ],
    declarations: [
        ChamodComponent,
        NewComponent
    ]
})
export class ChamodModule { }
