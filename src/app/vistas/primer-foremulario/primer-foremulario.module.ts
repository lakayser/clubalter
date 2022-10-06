import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PrimerForemularioComponent } from './primer-foremulario.component';



@NgModule({
  declarations: [
    PrimerForemularioComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class PrimerForemularioModule { }
