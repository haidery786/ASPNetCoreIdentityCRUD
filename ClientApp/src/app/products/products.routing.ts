import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { PieComponentComponent } from './pie-component/pie-component.component';
import { PieDetailComponent } from './pie-detail/pie-detail.component';
import { PieEditComponent } from './pie-edit/pie-edit.component';
import { PieAddComponent } from './pie-add/pie-add.component';

//import {AuthGuard} from '../auth.guard';
import {AuthGuard} from '../auth.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: 'pie-data', component: PieComponentComponent, canActivate: [AuthGuard] },
    { path: 'detail/:id', component: PieDetailComponent },
    { path: 'edit/:id', component: PieEditComponent },
    { path: 'add', component: PieAddComponent }
  
]);