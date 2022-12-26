import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule }   from '@angular/forms';

import { TorneoDetallesComponent } from './torneo-detalles.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    TorneoDetallesComponent,
    
  ],exports:[

  ],
  imports: [
    CommonModule,
    PipesModule,
    DialogModule,
    FormsModule
    
  ]
})
export class TorneoDetallesModule { }
