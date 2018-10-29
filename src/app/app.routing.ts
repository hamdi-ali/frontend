import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Apprenant } from '../app/models/apprenant'
// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',/*canActivate: [RoleGuard],
        data: {
          expectedRole: 'ADMIN'
        },*/
      },
      {
        path: 'components',
        loadChildren: './views/components/components.module#ComponentsModule'
      },
      {
        path: 'training-list',
        loadChildren: './views/gestion des parcours/liste de parcours/liste-parcours.module#ListeParcoursModule'
      },

      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'add-new-learner',
        loadChildren: './views/Gesttion Apprenant/ajouter apprenant/add-new-learner.module#AddNewLearnerModule'
      },
      {
        path: 'liste-apprenants',
        loadChildren: './views/Gesttion Apprenant/liste-apprenants/list-apprenant.module#ListApprenantModule'
      },
      {
        path: 'edit-learner',
        loadChildren: './views/Gesttion Apprenant/edit apprenant/edit-learner.module#EditLearnerModule'
      },
      {
        path: 'profile',
        loadChildren: './views/Gesttion Apprenant/profil-apprenant/profil-apprenant.module#ProfilApprenantModule'
      },
      {
        path: 'liste-competences',
        loadChildren: './views/gestion de compétences/liste-competences/liste-competences.module#ListeCompetencesModule'
      },
      {
        path: 'viewSkill/:id',
        loadChildren: './views/gestion de compétences/detail-competence/detail-competence.module#DetailCompetenceModule'
      },
      {
        path: 'viewPromotion/:id',
        loadChildren: './views/gestion des promotions/detail-promotion/detail-promotion.module#DetailPromotionModule'      },
      {
        path: 'liste-promotions',
        loadChildren: './views/gestion des promotions/liste-promotions/liste-promotions.module#ListePromotionsModule'
      },
      {
        path: 'viewParcours/:id',
        loadChildren: './views/gestion des parcours/detail du parcours/detail-parcours.module#DetailParcoursModule'
      }
    ]
  },

  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './views/pages/pages.module#PagesModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
