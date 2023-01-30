import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { PortalPagoComponent }          from './vistas/portal-pago/portal-pago.component';
import { CommitComponent }              from './vistas/commit/commit.component';
import { IniciousercanchaComponent } from './vistas/iniciousercancha/iniciousercancha.component';

import { InscripcionTorneoComponent } from './vistas/inscripcion-torneo/inscripcion-torneo.component';

import { InicioComponent } from './vistas/subdominios/inicio/inicio.component';
const routes: Routes = [
  /**
   * @AUTH canActivate: [AuthGuard] AGREGAR
   */
  {
    path: 'auth',
    loadChildren: () => import( './vistas/auth/auth.module' ).then( m => m.AuthModule ),
  },
  {
    path        : 'mod',
    loadChildren: () => import( './vistas/adminPages/admin-pages.module' ).then( m => m.AdminPagesModule ),
  },
  {
    path        : '',
    loadChildren: () => import('./vistas/cuadros-torneos/cuadros-torneos.module').then(m => m.CuadrosTorneosModule),
  },
  {
    path        : '',
    loadChildren: () => import('./vistas/brackets-torneos/brackets-torneos.module').then(m => m.BracketsTorneosModule),
  },
  {
    path        : '',
    loadChildren: () => import('./vistas/calendar/calendar.module').then(m => m.CalendarModule),
  },
  {
   path        : '',
    loadChildren: () => import( './vistas/index/pagina.module' ).then( m => m.PaginaModule ),
  },
  { path: 'pagos/:CodigoVenta' ,                component: PortalPagoComponent },
  { path: 'webpay_plus/commit' ,                component: CommitComponent},
  { path: 'canchaselbicho/dashboarduser',       component:IniciousercanchaComponent},
  { path: 'canchaselbicho/Inscripcion/:id',     component:InscripcionTorneoComponent},
  { path: 'subdominio',                         component:InicioComponent},
  { path: '**',                                 redirectTo: '', pathMatch: 'full' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


