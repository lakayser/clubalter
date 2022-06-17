import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }       from './vistas/login/login.component';
import { DashboardComponent }   from './vistas/dashboard/dashboard.component';
import { ProfileComponent }     from './vistas/profile/profile.component';
import { AuthGuard }            from './auth.guard';


import { IndexComponent } from './pagina/index/index.component';
import { KbotAgendaComponent } from './pagina/kbot-agenda/kbot-agenda.component';
import { KbotMarketComponent } from './pagina/kbot-market/kbot-market.component';
import { KbotPersonalizadoComponent } from './pagina/kbot-personalizado/kbot-personalizado.component';
import { EspecialistasComponent } from './vistas/especialistas/especialistas.component';
import { HorarioComponent } from './vistas/horario/horario.component';
import { BoxComponent } from './vistas/box/box.component';
import { LugarComponent } from './vistas/lugar/lugar.component';
import { PortalPagoComponent } from './pagina/portal-pago/portal-pago.component';
import { AgendarhoraComponent } from './vistas/agendarhora/agendarhora.component';
import { AgendarPacienteComponent } from './vistas/agendar-paciente/agendar-paciente.component';
import { OcupationComponent } from './vistas/ocupation/ocupation.component';
import { OrganizationComponent } from './vistas/organization/organization.component';
import { DashboardadminComponent } from './vistaAdmin/dashboardadmin/dashboardadmin.component';
import { AdminusuariosComponent } from './vistaAdmin/adminusuarios/adminusuarios.component';
import { OrganizacionesAdminComponent } from './vistaAdmin/organizaciones-admin/organizaciones-admin.component';
import { CanchasDashboardComponent } from './vistas/canchas-dashboard/canchas-dashboard.component';
import { CanchasReservarComponent } from './vistas/canchas-reservar/canchas-reservar.component';
import { CanchasCrudComponent } from './vistas/canchas-crud/canchas-crud.component';
import { Cancha1Component } from './vistas/canchaEspe/cancha1/cancha1.component';
import { Cancha2Component } from './vistas/canchaEspe/cancha2/cancha2.component';
import { Cancha3Component } from './vistas/canchaEspe/cancha3/cancha3.component';
import { VistaSemanaComponent } from './vistas/canchaEspe/vista-semana/vista-semana.component';
<<<<<<< HEAD
import { UsermoderatorComponent } from './vistaAdmin/usermoderator/usermoderator.component';
import { UsercrudModeratorComponent } from './vistas/usercrud-moderator/usercrud-moderator.component';
import { DashboardProfesorComponent } from './profesor-vista/dashboard-profesor/dashboard-profesor.component';
import { ClaseCrudComponent } from './profesor-vista/clase-crud/clase-crud.component';
=======
import { PagoComponent } from './pagina/pago/pago.component';
import { CitaComponent } from './cita/cita.component';



>>>>>>> dada0578b7cec6fc4f6aa7b62ca61e4c7fe0801b

const routes: Routes = [
  { path: '', component: IndexComponent },

  {path: 'kbot-market', component:KbotMarketComponent},
  {path: 'kbot-agenda', component: KbotAgendaComponent},
  {path: 'kbot-personalizado', component: KbotPersonalizadoComponent},
  {path: 'login',      component: LoginComponent },
  {path: 'dashboard',      component: DashboardComponent},
  {path: 'especialistas', component: EspecialistasComponent, canActivate: [AuthGuard]},
  {path: 'horario', component: HorarioComponent, canActivate: [AuthGuard]},
  {path: 'box', component: BoxComponent, canActivate: [AuthGuard]},
  {path: 'agendarpaciente', component: AgendarPacienteComponent },
  {path: 'lugar', component: LugarComponent},
  {path: 'pagos', component:PortalPagoComponent},
  {path: 'hora', component:AgendarhoraComponent,canActivate: [AuthGuard]},
  {path: 'ocupation', component:OcupationComponent },
  {path: 'organization', component:OrganizationComponent},
  {path: 'canchasGestion', component:CanchasDashboardComponent},
  {path: 'canchasReserva', component:CanchasReservarComponent},
  {path: 'canchasCRUD', component:CanchasCrudComponent},
  {path: 'cancha1', component:Cancha1Component},
  {path: 'cancha2', component:Cancha2Component},
  {path: 'cancha3', component:Cancha3Component},
  {path: 'vistaSemana', component:VistaSemanaComponent},
<<<<<<< HEAD
  {path: 'usermoderator', component:UsermoderatorComponent},
  {path: 'usercrudModerator', component:UsercrudModeratorComponent},
  {path: 'dashboardprofe', component:DashboardProfesorComponent},
  {path: 'clases-crud', component:ClaseCrudComponent},
=======
  {path: 'rut',component:PagoComponent},
  {path: 'cita',component:CitaComponent},
>>>>>>> dada0578b7cec6fc4f6aa7b62ca61e4c7fe0801b






  {path: 'dashboardAdmin', component:DashboardadminComponent},
  {path: 'usersAdmin', component:AdminusuariosComponent},
  {path: 'orgaAdmin', component:OrganizacionesAdminComponent},

  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, DashboardComponent]