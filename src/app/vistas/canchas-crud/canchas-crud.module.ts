import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FormsModule } from '@angular/forms';

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
  ],
})
export class CanchasCrudModule { }
