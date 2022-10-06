import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectCanchasComponent } from './select-canchas.component';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    SelectCanchasComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PipesModule,
  ],
})
export class SelectCanchasModule { }
