
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule, XHRBackend } from '@angular/http';
 import { HttpClientModule } from '@angular/common/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';

import { routing } from './app.routing';

/* App Root */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { PieComponentComponent } from './pie-component/pie-component.component';
import { PieDetailComponent } from './pie-detail/pie-detail.component';
import {PieService} from './dataServices/pie.service';
import { PieEditComponent } from './pie-edit/pie-edit.component';
import { PieAddComponent } from './pie-add/pie-add.component';


/* Account Imports */
import { AccountModule }  from './account/account.module';
/* Dashboard Imports */
import { DashboardModule }  from './dashboard/dashboard.module';

import { ConfigService } from './shared/utils/config.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavMenuComponent,
    PieComponentComponent,
    PieDetailComponent,
    PieEditComponent,
    PieAddComponent,
    HomeComponent      
  ],
  imports: [
    AccountModule,
    DashboardModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    FormsModule,
    HttpClientModule,
    HttpModule,
    routing
  ],
  providers: [ConfigService, PieService, { 
    provide: XHRBackend, 
    useClass: AuthenticateXHRBackend
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }



// import { NgModule }      from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
// import { BaseRequestOptions } from '@angular/http';
// import { HttpModule } from '@angular/http';
// import { AppComponent } from './app.component';
// import { NavMenuComponent } from './nav-menu/nav-menu.component';
// import { PieComponentComponent } from './pie-component/pie-component.component';
// import { PieDetailComponent } from './pie-detail/pie-detail.component';
// import {PieService} from './dataServices/pie.service';
// import { PieEditComponent } from './pie-edit/pie-edit.component';
// import { PieAddComponent } from './pie-add/pie-add.component';


// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';
// import { UserService } from './shared/services/user.service';

// @NgModule({
//   declarations: [
//     AppComponent,
//     NavMenuComponent,
//     HomeComponent,
//     PieComponentComponent,
//     PieDetailComponent,
//     PieEditComponent,
//     PieAddComponent,
//     LoginComponent,
//   ],
//   imports: [
//     BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
//     HttpClientModule,
//     HttpModule,
//     FormsModule,
//     RouterModule.forRoot([
//       { path: '', component: HomeComponent, pathMatch: 'full' },
//       { path: 'pie-data', component: PieComponentComponent },
//       { path: 'detail/:id', component: PieDetailComponent },
//       { path: 'edit/:id', component: PieEditComponent },
//       { path: 'add', component: PieAddComponent },
//       { path: 'login', component: LoginComponent },
//       { path: '**', redirectTo: '' }
   
//     ])
//   ],
//   providers: [
//     PieService,
//     UserService,
//     BaseRequestOptions
  
  
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
