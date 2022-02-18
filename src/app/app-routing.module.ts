import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }       from './vistas/login/login.component';
import { DashboardComponent }   from './vistas/dashboard/dashboard.component';
import { ProfileComponent }     from './vistas/profile/profile.component';
import { AuthGuard }            from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard',  component: DashboardComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'profile',      component: ProfileComponent,  canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, DashboardComponent]