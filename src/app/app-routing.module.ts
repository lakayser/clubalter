import { Component, NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { LoginComponent }               from './vistas/login/login.component';
import { IndexComponent }               from './pagina/index/index.component';
import { KbotAgendaComponent }          from './pagina/kbot-agenda/kbot-agenda.component';
import { KbotMarketComponent }          from './pagina/kbot-market/kbot-market.component';
import { KbotPersonalizadoComponent }   from './pagina/kbot-personalizado/kbot-personalizado.component';
import { PortalPagoComponent }          from './pagina/portal-pago/portal-pago.component';
import { DashboardadminComponent }      from './vistaAdmin/dashboardadmin/dashboardadmin.component';
import { AdminusuariosComponent }       from './vistaAdmin/adminusuarios/adminusuarios.component';
import { OrganizacionesAdminComponent } from './vistaAdmin/organizaciones-admin/organizaciones-admin.component';
import { CanchasDashboardComponent }    from './vistas/canchas-dashboard/canchas-dashboard.component';
import { CanchasCrudComponent }         from './vistas/canchas-crud/canchas-crud.component';
import { UsermoderatorComponent }       from './vistaAdmin/usermoderator/usermoderator.component';
import { DashboardProfesorComponent }   from './profesor-vista/dashboard-profesor/dashboard-profesor.component';
import { ClaseCrudComponent }           from './profesor-vista/clase-crud/clase-crud.component';
import { PagoComponent }                from './pagina/pago/pago.component';
import { SelectCanchasComponent }       from './vistas/select-canchas/select-canchas.component';
import { SelectReservaComponent }       from './vistas/select-reserva/select-reserva.component';
import { CommitComponent }              from './vistas/commit/commit.component';
import { FormularioRegistroComponent } from './vistas/formulario-registro/formulario-registro.component';
import { PrimerForemularioComponent } from './vistas/primer-foremulario/primer-foremulario.component';
import { GraciasComponent } from './vistas/gracias/gracias.component';
import { CrudsubadminComponent } from './vistas/crudsubadmin/crudsubadmin.component';
import { CanchasbichoComponent } from './vistas/subdominios/canchasbicho/canchasbicho.component';
import { IniciosubadmincanchaComponent } from './vistas/iniciosubadmincancha/iniciosubadmincancha.component';
import { IniciomodcanchaComponent } from './vistas/iniciomodcancha/iniciomodcancha.component';
import { IniciousercanchaComponent } from './vistas/iniciousercancha/iniciousercancha.component';
import { TorneoscrudComponent } from './vistas/torneoscrud/torneoscrud.component';
import { CrearTorneoComponent } from './vistas/crear-torneo/crear-torneo.component';
import { TorneoDetallesComponent } from './vistas/torneo-detalles/torneo-detalles.component';
import { AjustesTorneosComponent } from './vistas/ajustes-torneos/ajustes-torneos.component';
import { RegistroelbichoComponent } from './vistas/registroelbicho/registroelbicho.component';

import { HorasCalendarioComponent } from './vistas/calendario/pages/horas-calendario/horas-calendario.component';
import { InscripcionTorneoComponent } from './vistas/inscripcion-torneo/inscripcion-torneo.component';

import { VerGrillasComponent } from './vistas/grilla/pages/ver-grillas/ver-grillas.component';
const routes: Routes = [
  /**
   * @AUTH canActivate: [AuthGuard] AGREGAR
   */
  { path: ''                   , component: IndexComponent },
  { path: 'kbot-market'        , component:KbotMarketComponent },
  { path: 'kbot-agenda'        , component: KbotAgendaComponent },
  { path: 'kbot-personalizado' , component: KbotPersonalizadoComponent },
  { path: 'login'              , component: LoginComponent },
  { path: 'pagos/:CodigoVenta' , component: PortalPagoComponent },
  { path: 'webpay_plus/commit' , component: CommitComponent},
  { path: 'canchasGestion'     , component: CanchasDashboardComponent },
  { path: 'canchasCRUD'        , component: CanchasCrudComponent },
  { path: 'usermoderator'      , component: UsermoderatorComponent },
  { path: 'dashboardprofe'     , component: DashboardProfesorComponent },
  { path: 'clases-crud'        , component: ClaseCrudComponent },
  { path: 'rut'                , component: PagoComponent },
  { path: 'canchaselect'       , component: SelectCanchasComponent },
  { path: 'reservaselect/:id'  , component: SelectReservaComponent },
  { path: 'dashboardAdmin'     , component: DashboardadminComponent },
  { path: 'calendario'         , component: HorasCalendarioComponent },
  { path: 'usersAdmin'         , component: AdminusuariosComponent },
  { path: 'orgaAdmin'          , component: OrganizacionesAdminComponent },
  { path: 'registro'           , component: PrimerForemularioComponent},
  { path: 'formregistro'       , component: FormularioRegistroComponent},
  { path: 'Gracias'            , component: GraciasComponent},
  { path: 'crudsub'            , component:CrudsubadminComponent},
  { path: 'canchaselbicho/inicio', component:CanchasbichoComponent},
  { path: 'canchaselbicho/dashboardsub', component:IniciosubadmincanchaComponent},
  { path: 'canchaselbicho/dashboardmod', component:IniciomodcanchaComponent},
  { path: 'canchaselbicho/dashboarduser', component:IniciousercanchaComponent},
  { path: 'canchaselbicho/TorneoCrud', component:TorneoscrudComponent},
  { path: 'canchaselbicho/CrearTorneo', component:CrearTorneoComponent},
  { path: 'canchaselbicho/TorneoDetalles/:id', component:TorneoDetallesComponent},
  { path: 'canchaselbicho/AjusteT',  component:AjustesTorneosComponent},
  { path: 'canchaselbicho/Registro', component:RegistroelbichoComponent},
  { path: 'canchaselbicho/Inscripcion/:id', component:InscripcionTorneoComponent},


  { path: 'grilla',                  component:VerGrillasComponent },
  { path: '**'                 , redirectTo: '', pathMatch: 'full' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


