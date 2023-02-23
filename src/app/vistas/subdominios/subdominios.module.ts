import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantillasModule } from 'src/app/vistas/plantillas/plantillas.module';
import {ButtonModule} from 'primeng/button';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PlantillasModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
})
export class SubdominiosModule { }
