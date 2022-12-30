import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciomodcanchaComponent } from './iniciomodcancha.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IniciomodcanchaComponent,
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    RouterModule,
  ]
})
export class DashBoardModModule { }
