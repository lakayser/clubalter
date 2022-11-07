import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule }                from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IniciosubadmincanchaComponent } from './iniciosubadmincancha.component';
import { CalendarioModule } from '../calendario/calendario.module';



@NgModule({
  declarations: [
    IniciosubadmincanchaComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    CalendarioModule
  ]
})
export class IniciosubadmincanchaModule { }
