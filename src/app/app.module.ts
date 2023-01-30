import { NgModule }                               from '@angular/core';
import { AppRoutingModule }    from './app-routing.module';
import { AppComponent }                          from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { AuthGuard }                              from './auth.guard';
import { TokenInterceptorService }                from './servicios/token-interceptor.service';
import { CommonModule }                           from '@angular/common';

import { PlantillasModule } from './vistas/plantillas/plantillas.module';
import { PipesModule } from './pipes/pipes.module';
import { PaginaModule } from './vistas/index/pagina.module';
import { VistaAdminModule } from './vistas/adminPages/pages/usermoderator/vista-admin.module';
import { CanchasCrudModule } from './vistas/adminPages/pages/canchas-crud/canchas-crud.module';
import { CommitModule } from './vistas/commit/commit.module';
import { SubdominiosModule } from './vistas/subdominios/subdominios.module';
import { IniciousercanchaModule } from './vistas/iniciousercancha/iniciousercancha.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CalendarioModule } from './vistas/adminPages/pages/calendario-adm/calendario.module';
import { InscripcionTorneoModule } from './vistas/inscripcion-torneo/inscripcion-torneo.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './vistas/auth/auth.module';
import { AdminPagesModule } from './vistas/adminPages/admin-pages.module';
import { CuadrosTorneosModule } from './vistas/cuadros-torneos/cuadros-torneos.module';
import { BracketsTorneosModule } from './vistas/brackets-torneos/brackets-torneos.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    CommonModule,
    PlantillasModule,
    PipesModule,
    PaginaModule,
    VistaAdminModule,
    CanchasCrudModule,
    CommitModule,
    SubdominiosModule,
    IniciousercanchaModule,
    CalendarioModule,
    InscripcionTorneoModule,
    AuthModule,
    AdminPagesModule,
    CuadrosTorneosModule,
    BracketsTorneosModule,
    CalendarioModule,
  ],
  exports:[
  ],
  providers: [AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
