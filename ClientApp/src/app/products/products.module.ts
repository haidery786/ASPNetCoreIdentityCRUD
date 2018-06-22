import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { routing }  from './products.routing';
import { PieComponentComponent } from './pie-component/pie-component.component';
import { PieDetailComponent } from './pie-detail/pie-detail.component';
import {PieService} from './dataServices/pie.service';
import { PieEditComponent } from './pie-edit/pie-edit.component';
import { PieAddComponent } from './pie-add/pie-add.component';

import { AuthGuard } from '../auth.guard';


@NgModule({
  imports: [
    CommonModule,FormsModule,routing    
  ],
  declarations: [ PieComponentComponent,
    PieDetailComponent,
    PieEditComponent,
    PieAddComponent,],
  providers:    [ AuthGuard ,  PieService ]
})
export class ProductsModule { }
