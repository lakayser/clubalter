import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistaSemanaComponent } from './vista-semana/vista-semana.component';


@NgModule({
  declarations: [
    VistaSemanaComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule
  ],
})
export class CalendarModule { }