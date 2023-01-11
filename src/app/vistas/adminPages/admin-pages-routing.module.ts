import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanchasInicioComponent } from './pages/canchasInicio/canchasInicio.component';
import { CrearTorneoComponent } from './pages/crear-torneo/crear-torneo.component';
import { IniciomodcanchaComponent } from './pages/dashBoard-mod/iniciomodcancha.component';
import { IniciosubadmincanchaComponent } from './pages/dashBoard-sub/iniciosubadmincancha.component';
import { CrudsubadminComponent } from './pages/crud-sub/crudsubadmin.component';
import { TorneoscrudComponent } from './pages/torneo-crud/torneoscrud.component';
import { AjustesTorneosComponent } from './pages/ajustes-torneos/ajustes-torneos.component';
import { TorneoDetallesComponent } from './pages/torneo-detalles/torneo-detalles.component';
import { AdminusuariosComponent } from './pages/adminusuarios/adminusuarios.component';
import { OrganizacionesAdminComponent } from './pages/organizaciones-admin/organizaciones-admin.component';
import { HorasCalendarioComponent } from './pages/calendario-adm/pages/horas-calendario/horas-calendario.component';
import { CanchasCrudComponent } from './pages/canchas-crud/canchas-crud.component';
import { UsermoderatorComponent } from './pages/usermoderator/usermoderator.component';
import { HistorialReservasComponent } from './pages/historial-reservas/historial-reservas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path     : 'dash-boardAdm',
        component: IniciomodcanchaComponent,
      },
      {
        path     : 'dash-boardSub',
        component: IniciosubadmincanchaComponent,
      },
      {
        path     : 'crud-sub',
        component: CrudsubadminComponent,
      },
      {
        path     : 'ajuste-torneo',
        component: AjustesTorneosComponent,
      },
      {
        path     : 'detalles-torneoAdm/:id',
        component: TorneoDetallesComponent,
      },
      {
        path     : 'crud-torneo',
        component: TorneoscrudComponent,
      },
      {
        path     : 'crear-torneo',
        component: CrearTorneoComponent,
      },
      {
        path     : 'canchas-crud',
        component: CanchasCrudComponent,
      },
      {
        path     : 'new-user',
        component: UsermoderatorComponent,
      },
      {
        path     : 'inicio',
        component: CanchasInicioComponent,
      },
      {
        path     : 'users-admin',
        component: AdminusuariosComponent,
      },
      {
        path     : 'organizacion',
        component: OrganizacionesAdminComponent,
      },
      {
        path     : 'calendario',
        component: HorasCalendarioComponent,
      },
      {
        path     : 'historial',
        component: HistorialReservasComponent,
      },
      {
        path     : '',
        component: IniciomodcanchaComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AdminPagesRoutingModule { }
