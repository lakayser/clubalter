import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { SelectReservaComponent } from './select-reserva.component';



@NgModule({
  declarations: [
    SelectReservaComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
  ],
})
export class SelectReservaModule { }
