import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Import containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

const APP_CONTAINERS = [
  FullLayoutComponent,
  SimpleLayoutComponent
]

// Import components
import {
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
} from './components';
// import services
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { ApprenantService } from "./services/apprenant.service";
import { LoginService } from './services/login/login.service';
import { AjoutApprenantService } from './services/apprenant/ajout-apprenant.service';
import { RemoveApprenantService } from './services/apprenant/remove-apprenant.service'
import { UploadImageService } from './services/upload-image.service';
import { GetListApprenantService } from './services/apprenant/get-list-apprenant.service';
// cookie service
import { CookieService } from 'angular2-cookie/services/cookies.service'
//import { UserlistComponent } from './views/gestion utilisateurs/userlist/userlist.component';
//import { AddNewUserComponent } from './views/gestion utilisateurs/add-new-user/add-new-user.component';
const APP_COMPONENTS = [
  AppAsideComponent,
  AppBreadcrumbsComponent,
  AppFooterComponent,
  AppHeaderComponent,
  AppSidebarComponent,
  AppSidebarFooterComponent,
  AppSidebarFormComponent,
  AppSidebarHeaderComponent,
  AppSidebarMinimizerComponent,
  APP_SIDEBAR_NAV
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  ReplaceDirective,
  SIDEBAR_TOGGLE_DIRECTIVES
]

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { GetListParcoursService } from './services/parcours/get-list-parcours.service';
import { StorageService } from './services/login/storage.service';
import { GetApprenantService } from './services/apprenant/get-apprenant.service';
import { GetListCompetencesService } from './services/competence/get-list-competences.service';
import { GetCompetenceService } from './services/competence/get-competence.service';
import { GetListPromotionsService } from './services/promotion/get-list-promotions.service';
import { GetPromotionService } from './services/promotion/get-promotion.service';
import { GetTypeFormationByIdService } from './services/competence/get-type-formation-by-id.service';
import { GetParcoursService } from './services/parcours/get-parcours.service';
import { GetNombreApprenantsService } from './services/apprenant/get-nombre-apprenants.service';
import { ForgotPasswordService } from './services/login/forgot-password.service';
import { EditApprenantService } from './services/apprenant/edit-apprenant.service';
import { SupprimerCompetenceService } from './services/competence/supprimer-competence.service';
// import { ChamodComponent } from './views/chamod/chamod/chamod.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES,
    // ChamodComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },ApprenantService, LoginService, AjoutApprenantService, RemoveApprenantService, CookieService,
     UploadImageService, GetListApprenantService, GetListParcoursService, StorageService, GetApprenantService, GetListCompetencesService, GetCompetenceService, GetListPromotionsService, GetPromotionService, GetTypeFormationByIdService, GetParcoursService, GetNombreApprenantsService, ForgotPasswordService, EditApprenantService, SupprimerCompetenceService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
