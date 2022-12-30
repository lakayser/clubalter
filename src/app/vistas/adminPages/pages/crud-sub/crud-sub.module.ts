import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudsubadminComponent } from './crudsubadmin.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    CrudsubadminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
  ]
})
export class CrudSubModule { }
