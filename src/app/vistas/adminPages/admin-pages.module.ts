import { NgModule } from '@angular/core';
import { AdminPagesRoutingModule } from './admin-pages-routing.module';
import { AdminusuariosModule } from './pages/adminusuarios/adminusuarios.module';
import { AjusterTorneosModule } from './pages/ajustes-torneos/ajuster-torneos.module';
import { CalendarioModule } from './pages/calendario-adm/calendario.module';
import { CanchasCrudModule } from './pages/canchas-crud/canchas-crud.module';
import { CanchasinicioModule } from './pages/canchasInicio/canchasinicio.module';
import { CrearTorneoModule } from './pages/crear-torneo/crear-torneo.module';
import { CrudSubModule } from './pages/crud-sub/crud-sub.module';
import { DashBoardModModule } from './pages/dashBoard-mod/dash-board-mod.module';
import { DashBoardSubModule } from './pages/dashBoard-sub/dash-board-sub.module';
import { OrganizacionesAdminModule } from './pages/organizaciones-admin/organizaciones-admin.module';
import { TorneoCrudModule } from './pages/torneo-crud/torneo-crud.module';
import { TorneoDetallesModule } from './pages/torneo-detalles/torneo-detalles.module';
import { VistaAdminModule } from './pages/usermoderator/vista-admin.module';


@NgModule({
  declarations: [
  ],
  imports: [
    AdminPagesRoutingModule,
    AdminusuariosModule,
    AjusterTorneosModule,
    CanchasinicioModule,
    CrearTorneoModule,
    CrudSubModule,
    DashBoardModModule,
    DashBoardSubModule,
    OrganizacionesAdminModule,
    TorneoCrudModule,
    TorneoDetallesModule,
    CanchasCrudModule,
    VistaAdminModule,
    CalendarioModule,
  ],

})
export class AdminPagesModule { }
