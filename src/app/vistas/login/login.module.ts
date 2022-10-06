import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { PlantillasModule } from 'src/app/plantillas/plantillas.module';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PlantillasModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LoginModule { }
