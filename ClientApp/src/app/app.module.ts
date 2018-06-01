import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PieComponentComponent } from './pie-component/pie-component.component';
import { PieDetailComponent } from './pie-detail/pie-detail.component';
import {PieService} from './dataServices/pie.service';
import { PieEditComponent } from './pie-edit/pie-edit.component';
import { PieAddComponent } from './pie-add/pie-add.component';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { UserService } from './shared/user.service';
import { AuthenticationService } from './shared/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PieComponentComponent,
    PieDetailComponent,
    PieEditComponent,
    PieAddComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'pie-data', component: PieComponentComponent },
      { path: 'detail/:id', component: PieDetailComponent },
      { path: 'edit/:id', component: PieEditComponent },
      { path: 'add', component: PieAddComponent },
      { path: 'login', component: LoginComponent },
      // {
      //   path: 'home',
      //   canActivate: [AuthguardGuard],
      //   component: HomeComponent
      // },
      { path: '**', redirectTo: '' }
   
    ])
  ],
  providers: [
    PieService,
    AuthenticationService,
    UserService,
    AuthguardGuard,
    BaseRequestOptions
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
