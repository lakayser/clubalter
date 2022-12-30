import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizacionesAdminComponent } from './organizaciones-admin.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';



@NgModule({
  declarations: [
    OrganizacionesAdminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
  ]
})
export class OrganizacionesAdminModule { }
