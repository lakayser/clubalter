import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { TorneoscrudComponent } from './torneoscrud.component';

import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    TorneoscrudComponent
  ],
  exports:[
    
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  providers:[{provide: LOCALE_ID, useValue: 'es'}]
})
export class TorneoscrudModule { }
