import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TorneoDetallesComponent } from './torneo-detalles.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TorneoDetallesComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    PrimeNgModule,
    FormsModule,
  ]
})
export class TorneoDetallesModule { }
