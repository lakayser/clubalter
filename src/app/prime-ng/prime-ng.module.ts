import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import {InputNumberModule} from 'primeng/inputnumber';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';


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
    MenubarModule,

  ]
})
export class PrimeNgModule { }
