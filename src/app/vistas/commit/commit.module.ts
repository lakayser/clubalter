import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommitComponent } from './commit.component';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { PlantillasModule } from 'src/app/plantillas/plantillas.module';



@NgModule({
  declarations: [
    CommitComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PipesModule,
    PlantillasModule,
  ],
})
export class CommitModule { }
