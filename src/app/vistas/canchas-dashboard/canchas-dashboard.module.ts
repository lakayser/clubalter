import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { CanchasDashboardComponent } from './canchas-dashboard.component';



@NgModule({
  declarations: [
    CanchasDashboardComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PipesModule,
  ],
})
export class CanchasDashboardModule { }
