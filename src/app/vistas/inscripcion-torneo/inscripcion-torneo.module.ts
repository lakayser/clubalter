import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionTorneoComponent } from './inscripcion-torneo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng13RutModule } from 'ng13-rut';
import { RutModule } from 'rut-chileno'; //


@NgModule({
  declarations: [
    InscripcionTorneoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RutModule,
    Ng13RutModule
  ]
})
export class InscripcionTorneoModule { }
