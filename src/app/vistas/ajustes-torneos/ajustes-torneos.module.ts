import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { AjustesTorneosComponent } from './ajustes-torneos.component';

@NgModule({
  declarations: [
    AjustesTorneosComponent
  ],
  exports: [
  ], 
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule,
  ]
})
export class AjustesTorneosModule { }
