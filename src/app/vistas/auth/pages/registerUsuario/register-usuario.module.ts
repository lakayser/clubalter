import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimerForemularioComponent } from './primer-foremulario.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PrimerForemularioComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class RegisterUsuarioModule { }
