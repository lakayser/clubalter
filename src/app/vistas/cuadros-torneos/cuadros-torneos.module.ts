import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuadrosTorneosRoutingModule } from './cuadros-torneos-routing.module';
import { CuadrosComponent } from './pages/cuadros/cuadros.component';
import { CuadroOchoRondaUnoComponent } from './components/cuadro-ocho-ronda-uno/cuadro-ocho-ronda-uno.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CuadroOchoFormComponent } from './components/cuadro-ocho-form/cuadro-ocho-form.component';


@NgModule({
  declarations: [
    CuadrosComponent,
    CuadroOchoRondaUnoComponent,
    CuadroOchoFormComponent
  ],
  imports: [
    CommonModule,
    CuadrosTorneosRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule,
  ]
})
export class CuadrosTorneosModule { }
