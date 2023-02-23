import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './vistas/index/index.component';
import { PortalPagoComponent } from './vistas/portal-pago/portal-pago.component';
import { CommitComponent } from './vistas/commit/commit.component';
import { IniciousercanchaComponent } from './vistas/iniciousercancha/iniciousercancha.component';
import { CanchasInicioComponent } from './vistas/adminPages/pages/canchasInicio/canchasInicio.component';
import { InscripcionTorneoComponent } from './vistas/inscripcion-torneo/inscripcion-torneo.component';

import { InicioComponent } from './vistas/subdominios/inicio/inicio.component';
const routes: Routes = [
  /**
   * @AUTH canActivate: [AuthGuard] AGREGAR
   */

  {
    path: 'auth',
    loadChildren: () => import('./vistas/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'mod',
    loadChildren: () => import('./vistas/adminPages/admin-pages.module').then(m => m.AdminPagesModule),
  },
  {
    path: 'bracket/:id',
    loadChildren: () => import('./vistas/brackets-torneos/brackets-torneos.module').then(m => m.BracketsTorneosModule),
  },
  {
    path: 'calendario',
    loadChildren: () => import('./vistas/calendar/calendar.module').then(m => m.CalendarModule),
  },
 
  { path: 'pagos/:CodigoVenta',             component: PortalPagoComponent },
  { path: 'webpay_plus/commit',             component: CommitComponent },
  { path: 'canchaselbicho/dashboarduser',   component: IniciousercanchaComponent },
  { path: 'nombreclub/Inscripcion/:id',     component: InscripcionTorneoComponent },
  { path: 'nombreclub',                     component: InicioComponent },
  { path: '',                               component: CanchasInicioComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


