import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanchasInicioComponent } from './canchasInicio.component';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    CanchasInicioComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class CanchasinicioModule { }
