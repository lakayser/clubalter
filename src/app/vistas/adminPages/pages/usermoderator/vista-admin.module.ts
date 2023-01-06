import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { UsermoderatorComponent } from './usermoderator.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    UsermoderatorComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
  ],
})
export class VistaAdminModule { }
