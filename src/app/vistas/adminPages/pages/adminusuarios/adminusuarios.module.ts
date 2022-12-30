import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminusuariosComponent } from './adminusuarios.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    AdminusuariosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
  ]
})
export class AdminusuariosModule { }
