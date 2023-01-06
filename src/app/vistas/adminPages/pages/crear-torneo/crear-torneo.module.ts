import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearTorneoComponent } from './crear-torneo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashBoardModModule } from '../dashBoard-mod/dash-board-mod.module';



@NgModule({
  declarations: [
    CrearTorneoComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DashBoardModModule,
  ]
})
export class CrearTorneoModule { }
