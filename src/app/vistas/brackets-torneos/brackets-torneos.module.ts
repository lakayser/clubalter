import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BracketsTorneosRoutingModule } from './brackets-torneos-routing.module';
import { BracketOchoComponent } from './pages/bracket-ocho/bracket-ocho.component';
import { BracketOchoRondaUnoComponent } from './components/bracket-ocho-ronda-uno/bracket-ocho-ronda-uno.component';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BracketOchoFormComponent } from './components/bracket-ocho-form/bracket-ocho-form.component';


@NgModule({
  declarations: [
  
    BracketOchoComponent,
    BracketOchoRondaUnoComponent,
    BracketOchoFormComponent
  ],
  imports: [
    CommonModule,
    BracketsTorneosRoutingModule,
    ReactiveFormsModule,
    PrimeNgModule,
  ]
})
export class BracketsTorneosModule { }
