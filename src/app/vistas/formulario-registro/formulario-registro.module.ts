import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormularioRegistroComponent } from './formulario-registro.component';



@NgModule({
  declarations: [
    FormularioRegistroComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class FormularioRegistroModule { }
