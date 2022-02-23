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

const routes: Routes = [
  { path: '', component: IndexComponent },

  {path: 'kbot-market', component:KbotMarketComponent},
  {path: 'kbot-agenda', component: KbotAgendaComponent},
  {path: 'kbot-personalizado', component: KbotPersonalizadoComponent},
  { path: 'login',      component: LoginComponent },
  { path: 'dashboard',      component: DashboardComponent,  canActivate: [AuthGuard] },
  {path: 'especialistas', component: EspecialistasComponent, canActivate: [AuthGuard]},
  {path: 'horario', component: HorarioComponent, canActivate: [AuthGuard]},
  {path: 'box', component: BoxComponent, canActivate: [AuthGuard]},


  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, DashboardComponent]