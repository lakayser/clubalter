import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CrearTorneoComponent } from './crear-torneo.component';


@NgModule({
  declarations: [
    CrearTorneoComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CrearTorneoModule { }
