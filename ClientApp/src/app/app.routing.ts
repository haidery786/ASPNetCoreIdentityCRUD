import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { PieComponentComponent } from './pie-component/pie-component.component';
import { PieDetailComponent } from './pie-detail/pie-detail.component';
import { PieEditComponent } from './pie-edit/pie-edit.component';
import { PieAddComponent } from './pie-add/pie-add.component';
import {AuthGuard} from './auth.guard';


const appRoutes: Routes = [
  { path: '', component: HomeComponent } ,
  { path: 'pie-data', component: PieComponentComponent , canActivate: [AuthGuard]},
  { path: 'detail/:id', component: PieDetailComponent , canActivate: [AuthGuard]},
  { path: 'edit/:id', component: PieEditComponent , canActivate: [AuthGuard]},
  { path: 'add', component: PieAddComponent , canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);