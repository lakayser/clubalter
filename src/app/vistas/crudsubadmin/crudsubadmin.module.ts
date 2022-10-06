import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';

import { CrudsubadminComponent } from './crudsubadmin.component';



@NgModule({
  declarations: [
    CrudsubadminComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
  ],
})
export class CrudsubadminModule { }
