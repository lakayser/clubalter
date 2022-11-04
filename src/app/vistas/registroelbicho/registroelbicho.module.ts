import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistroelbichoComponent } from './registroelbicho.component';

@NgModule({
  declarations: [
    RegistroelbichoComponent
  ], 
  exports: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RegistroelbichoModule { }
