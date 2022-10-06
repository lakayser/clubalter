import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';

import { ClaseCrudComponent } from './clase-crud/clase-crud.component';
import { DashboardProfesorComponent } from './dashboard-profesor/dashboard-profesor.component';



@NgModule({
  declarations: [
    ClaseCrudComponent,
    DashboardProfesorComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
  ],
})
export class ProfesorVistaModule { }
