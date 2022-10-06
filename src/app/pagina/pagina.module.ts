import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';

import { IndexComponent } from './index/index.component';
import { KbotAgendaComponent } from './kbot-agenda/kbot-agenda.component';
import { KbotMarketComponent } from './kbot-market/kbot-market.component';
import { KbotPersonalizadoComponent } from './kbot-personalizado/kbot-personalizado.component';
import { PagoComponent } from './pago/pago.component';
import { PortalPagoComponent } from './portal-pago/portal-pago.component';
import { PlantillasModule } from '../plantillas/plantillas.module';



@NgModule({
  declarations: [
    IndexComponent,
    KbotAgendaComponent,
    KbotMarketComponent,
    KbotPersonalizadoComponent,
    PagoComponent,
    PortalPagoComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PlantillasModule,
    FormsModule,
    PipesModule,
  ],
})
export class PaginaModule { }
