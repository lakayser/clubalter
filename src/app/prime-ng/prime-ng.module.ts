import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {InputNumberModule} from 'primeng/inputnumber';
import {AutoCompleteModule} from 'primeng/autocomplete';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    SidebarModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    InputNumberModule,
    AutoCompleteModule,
  ]
})
export class PrimeNgModule { }
