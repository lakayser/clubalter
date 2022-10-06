import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciomodcanchaComponent } from './iniciomodcancha.component';



@NgModule({
  declarations: [
    IniciomodcanchaComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ]
})
export class IniciomodcanchaModule { }
