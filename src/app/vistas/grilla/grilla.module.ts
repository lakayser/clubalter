import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrillaOchoComponent } from './components/grilla-ocho/grilla-ocho.component';
import { FormsModule } from '@angular/forms';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    GrillaOchoComponent,
  ],
  exports: [
    GrillaOchoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
  ]
})
export class GrillaModule { }
