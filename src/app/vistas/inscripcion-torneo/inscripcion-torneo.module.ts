import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionTorneoComponent } from './inscripcion-torneo.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InscripcionTorneoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class InscripcionTorneoModule { }
