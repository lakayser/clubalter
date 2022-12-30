import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../pipes/pipes.module';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimeNgModule } from '../../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    FooterComponent,
    SidebarComponent,
  ],
  exports: [
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    PrimeNgModule,
  ]
})
export class PlantillasModule { }
