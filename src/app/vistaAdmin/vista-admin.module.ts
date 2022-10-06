import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';
import { NgChartsModule } from 'ng2-charts';


import { AdminusuariosComponent } from './adminusuarios/adminusuarios.component';
import { DashboardadminComponent } from './dashboardadmin/dashboardadmin.component';
import { OrganizacionesAdminComponent } from './organizaciones-admin/organizaciones-admin.component';
import { UsermoderatorComponent } from './usermoderator/usermoderator.component';


@NgModule({
  declarations: [
    AdminusuariosComponent,
    DashboardadminComponent,
    OrganizacionesAdminComponent,
    UsermoderatorComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    PipesModule,
    FormsModule,
    NgChartsModule,
  ],
})
export class VistaAdminModule { }
