import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    SidebarModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
