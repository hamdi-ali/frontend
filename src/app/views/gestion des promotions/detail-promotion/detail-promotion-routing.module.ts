import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPromotionComponent } from './detail-promotion.component';

const routes: Routes = [
    {
        path: '',
        component: DetailPromotionComponent,
        data: {
          title: 'detail-promotion'
        }
      }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailPromotionRoutingModule { }
