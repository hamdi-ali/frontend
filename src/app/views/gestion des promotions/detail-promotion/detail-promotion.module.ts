import { NgModule } from '@angular/core';

import { DetailPromotionComponent } from './detail-promotion.component';
import { DetailPromotionRoutingModule } from './detail-promotion-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        DetailPromotionRoutingModule, CommonModule, FormsModule

    ],
    declarations: [
        DetailPromotionComponent,
    ],
    providers: [  ]
})
export class DetailPromotionModule { }
