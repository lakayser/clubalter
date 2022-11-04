import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TorneoscrudComponent } from './torneoscrud.component';


@NgModule({
  declarations: [
    TorneoscrudComponent
  ],
  exports:[
    
  ],
  imports: [
    CommonModule,
    PipesModule
  ]
})
export class TorneoscrudModule { }
