import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarHomeComponent } from './pages/calendar-home/calendar-home.component';
import { HeaderCalendarComponent } from './components/header-calendar/header-calendar.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { DiasCalendarComponent } from './components/dias-calendar/dias-calendar.component';
import { HorasCalendarComponent } from './components/horas-calendar/horas-calendar.component';
import { FormsModule } from '@angular/forms';
import { AgendarRegistradoComponent } from './components/agendar-registrado/agendar-registrado.component';


@NgModule({
  declarations: [
    CalendarHomeComponent,
    HeaderCalendarComponent,
    DiasCalendarComponent,
    HorasCalendarComponent,
    AgendarRegistradoComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    PrimeNgModule,
    FormsModule,
  ]
})
export class CalendarModule { }
