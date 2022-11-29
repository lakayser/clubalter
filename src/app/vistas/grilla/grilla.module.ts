import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrillaOchoMovilComponent } from './components/grilla-ocho-movil/grilla-ocho-movil.component';
import { GrillaOchoComponent } from './components/grilla-ocho/grilla-ocho.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GrillaOchoComponent,
    GrillaOchoMovilComponent
  ],
  exports: [
    GrillaOchoComponent,
    GrillaOchoMovilComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class GrillaModule { }
