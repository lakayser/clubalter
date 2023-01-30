import { NgModule }                     from '@angular/core';
import { RouterModule, Routes }         from '@angular/router';
import { IndexComponent } from './vistas/index/index.component';
import { PortalPagoComponent }          from './vistas/portal-pago/portal-pago.component';
import { CommitComponent }              from './vistas/commit/commit.component';
import { IniciousercanchaComponent } from './vistas/iniciousercancha/iniciousercancha.component';

import { InscripcionTorneoComponent } from './vistas/inscripcion-torneo/inscripcion-torneo.component';

import { VerGrillasComponent } from './vistas/grilla/pages/ver-grillas/ver-grillas.component';
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
    loadChildren: () => import( './vistas/index/pagina.module' ).then( m => m.PaginaModule ),
  },
  { path: 'pagos/:CodigoVenta' ,                component: PortalPagoComponent        },
  { path: 'webpay_plus/commit' ,                component: CommitComponent            },
  { path: 'canchaselbicho/dashboarduser',       component:IniciousercanchaComponent   },
  { path: 'canchaselbicho/Inscripcion/:id',     component:InscripcionTorneoComponent  },
  { path: 'subdominio',                         component:InicioComponent},
  { path: 'grilla',                             component:VerGrillasComponent         },
  { path: '**',                                 redirectTo: '', pathMatch: 'full'     },
 

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


