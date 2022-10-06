import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanchasbichoComponent } from './canchasbicho/canchasbicho.component';
import { PlantillasModule } from 'src/app/plantillas/plantillas.module';



@NgModule({
  declarations: [
    CanchasbichoComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PlantillasModule,
  ],
})
export class SubdominiosModule { }
