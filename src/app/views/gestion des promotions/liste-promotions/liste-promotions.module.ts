import { NgModule } from '@angular/core';

import { ListePromotionsComponent } from './liste-promotions.component';
import { ListePromotionsRoutingModule } from './liste-promotions-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'



@NgModule({
    imports: [
      ListePromotionsRoutingModule, CommonModule, FormsModule

    ],
    declarations: [
      ListePromotionsComponent
    ]
})
export class ListePromotionsModule { }
