import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

import { CanchasCrudComponent } from './canchas-crud.component';



@NgModule({
  declarations: [
    CanchasCrudComponent,
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule
  ],
})
export class CanchasCrudModule { }
