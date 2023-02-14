import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanchasInicioComponent } from './canchasInicio.component';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { PlantillasModule } from '../../../plantillas/plantillas.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CanchasInicioComponent,

  ],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    PlantillasModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CanchasinicioModule { }
