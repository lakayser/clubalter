import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorasCalendarioComponent } from './pages/horas-calendario/horas-calendario.component';
import { CanchasSelectComponent } from './components/canchas-select/canchas-select.component';
import { FormsModule } from '@angular/forms';
import { DiasCalendarioComponent } from './components/dias-calendario/dias-calendario.component';
import { VerHorasComponent } from './components/ver-horas/ver-horas.component';
import { DiasCalendarioTlfComponent } from './components/dias-calendario-tlf/dias-calendario-tlf.component';



@NgModule({
  declarations: [
    HorasCalendarioComponent,
    CanchasSelectComponent,
    DiasCalendarioComponent,
    VerHorasComponent,
    DiasCalendarioTlfComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class CalendarioModule { }
