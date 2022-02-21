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

const routes: Routes = [
  { path: '', component: IndexComponent },

  {path: 'kbot-market', component:KbotMarketComponent},
  {path: 'kbot-agenda', component: KbotAgendaComponent},
  {path: 'kbot-personalizado', component: KbotPersonalizadoComponent},
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'profile',      component: ProfileComponent,  canActivate: [AuthGuard] },


  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, DashboardComponent]