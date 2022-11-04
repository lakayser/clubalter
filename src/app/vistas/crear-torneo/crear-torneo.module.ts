import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearTorneoComponent } from './crear-torneo.component';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    CrearTorneoComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule
  ]
})
export class CrearTorneoModule { }
