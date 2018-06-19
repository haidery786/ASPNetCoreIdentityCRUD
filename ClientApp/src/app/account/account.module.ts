import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { SharedModule }   from '../shared/modules/shared.module';
 
import { UserService }  from '../shared/services/user.service';
import {MyDetailsService} from '../shared/services/mydetails.service';

import { EmailValidator } from '../directives/email.validator.directive';

import { routing }  from './account.routing';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
import { MyDetailsComponent } from './my-details/my-details.component';

import { AuthGuard } from '../auth.guard';


@NgModule({
  imports: [
    CommonModule,FormsModule,routing,
    SharedModule
  ],
  declarations: [RegistrationFormComponent,EmailValidator, LoginFormComponent, FacebookLoginComponent, MyDetailsComponent],
  providers:    [ AuthGuard , UserService , MyDetailsService ]
})
export class AccountModule { }
