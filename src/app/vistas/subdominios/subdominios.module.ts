import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanchasbichoComponent } from './canchasbicho/canchasbicho.component';
import { PlantillasModule } from 'src/app/plantillas/plantillas.module';
import {ButtonModule} from 'primeng/button';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    CanchasbichoComponent,
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
