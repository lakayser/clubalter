import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IniciomodcanchaComponent } from './iniciomodcancha.component';
import { CalendarioModule } from '../calendario/calendario.module';
import { HorasCalendarioComponent } from '../calendario/pages/horas-calendario/horas-calendario.component';


@NgModule({
  declarations: [
    IniciomodcanchaComponent,

  ],
  exports: [
  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule
   
  ]
})
export class IniciomodcanchaModule { }
