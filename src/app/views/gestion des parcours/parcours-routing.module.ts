import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParcoursComponent } from './parcours.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Chamod'
        },
        children: [
            {
                path: 'new',
                data: {
                    title: 'New'
                }
            },
            {
                path: '',
                component: ParcoursComponent,
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
export class ParcoursRoutingModule { }
