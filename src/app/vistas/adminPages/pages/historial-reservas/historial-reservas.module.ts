import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistorialReservasComponent } from './historial-reservas.component';

import localeEs from '@angular/common/locales/es'
import {registerLocaleData} from '@angular/common'

import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../../../pipes/pipes.module';


registerLocaleData(localeEs, 'es')

@NgModule({
  declarations: [
    HistorialReservasComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
 
  ],
  providers:[{provide:LOCALE_ID, useValue:'es'}]
})
export class HistorialReservasModule { }
