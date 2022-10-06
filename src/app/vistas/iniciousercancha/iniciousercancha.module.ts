import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IniciousercanchaComponent } from './iniciousercancha.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    IniciousercanchaComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
  ]
})
export class IniciousercanchaModule { }
