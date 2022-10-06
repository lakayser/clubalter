import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPipe } from './filter.pipe';
import { ObjToArrayPipe } from './objToArray.pipe';



@NgModule({
  declarations: [
    FilterPipe,
    ObjToArrayPipe,
  ],
  exports: [
    FilterPipe,
    ObjToArrayPipe,
  ],
  imports: [
    CommonModule
  ],
})
export class PipesModule { }
