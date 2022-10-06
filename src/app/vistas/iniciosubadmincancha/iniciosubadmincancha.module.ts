import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule }                from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IniciosubadmincanchaComponent } from './iniciosubadmincancha.component';



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
  ]
})
export class IniciosubadmincanchaModule { }
