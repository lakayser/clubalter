import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AjustesTorneosComponent } from './ajustes-torneos.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AjustesTorneosComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class AjusterTorneosModule { }
