import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../pipes/pipes.module';

import { IndexComponent } from './index.component';
import { PortalPagoComponent } from '../portal-pago/portal-pago.component';
import { PlantillasModule } from '../plantillas/plantillas.module';
import { IndexRoutingModule } from './index-routing.module';



@NgModule({
  declarations: [
    IndexComponent,
    PortalPagoComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PlantillasModule,
    FormsModule,
    PipesModule,
    IndexRoutingModule,
  ],
})
export class PaginaModule { }
