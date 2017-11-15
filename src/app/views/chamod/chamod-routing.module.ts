import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChamodComponent } from './chamod.component';
import { NewComponent } from './new.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Chamod'
        },
        children: [
            {
                path: 'new',
                component: NewComponent,
                data: {
                    title: 'New'
                }
            },
            {
                path: '',
                component: ChamodComponent,
                data: {
                    title: ''
                }
            },



        ]
    }
];






@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChamodRoutingModule { }
