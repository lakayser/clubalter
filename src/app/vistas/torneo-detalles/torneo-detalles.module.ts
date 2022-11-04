import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { TorneoDetallesComponent } from './torneo-detalles.component';

@NgModule({
  declarations: [
    TorneoDetallesComponent,
    
  ],exports:[

  ],
  imports: [
    CommonModule,
    PipesModule,
    
  ]
})
export class TorneoDetallesModule { }
