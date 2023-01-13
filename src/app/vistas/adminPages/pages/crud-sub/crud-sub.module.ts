import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CrudsubadminComponent } from './crudsubadmin.component';
import { DialogModule } from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    CrudsubadminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    DialogModule,
    TabViewModule
   
  ],
})
export class CrudSubModule { }
