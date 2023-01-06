import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantillasModule } from 'src/app/vistas/plantillas/plantillas.module';
import {ButtonModule} from 'primeng/button';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    InicioComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PlantillasModule,
    ButtonModule
  ],
})
export class SubdominiosModule { }
