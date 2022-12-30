import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciosubadmincanchaComponent } from './iniciosubadmincancha.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    IniciosubadmincanchaComponent,
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
  ]
})
export class DashBoardSubModule { }
