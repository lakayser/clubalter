import { NgModule }             from '@angular/core';
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

const routes: Routes = [
  { path: '', component: IndexComponent },

  {path: 'kbot-market', component:KbotMarketComponent},
  {path: 'kbot-agenda', component: KbotAgendaComponent},
  {path: 'kbot-personalizado', component: KbotPersonalizadoComponent},
  { path: 'login',      component: LoginComponent },
  { path: 'dashboard',      component: DashboardComponent},
  {path: 'especialistas', component: EspecialistasComponent, canActivate: [AuthGuard]},
  {path: 'horario', component: HorarioComponent, canActivate: [AuthGuard]},
  {path: 'box', component: BoxComponent, canActivate: [AuthGuard]},
  {path: 'agendarpaciente', component: AgendarPacienteComponent },
  {path: 'lugar', component: LugarComponent},
  {path: 'pagos', component:PortalPagoComponent},
  {path: 'hora', component:AgendarhoraComponent,canActivate: [AuthGuard]},
  {path: 'ocupation', component:OcupationComponent },
  {path: 'organization', component:OrganizationComponent},
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