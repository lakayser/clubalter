import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TorneoscrudComponent } from './torneoscrud.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TorneoscrudComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class TorneoCrudModule { }
