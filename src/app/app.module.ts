import { NgModule }                               from '@angular/core';
import { BrowserModule }                          from '@angular/platform-browser';
import { AppRoutingModule }    from './app-routing.module';
import { AppComponent }                          from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { AuthGuard }                              from './auth.guard';
import { TokenInterceptorService }                from './servicios/token-interceptor.service';
import { CommonModule }                           from '@angular/common';

import { PlantillasModule } from './plantillas/plantillas.module';
import { PipesModule } from './pipes/pipes.module';
import { PaginaModule } from './pagina/pagina.module';
import { ProfesorVistaModule } from './profesor-vista/profesor-vista.module';
import { VistaAdminModule } from './vistaAdmin/vista-admin.module';
import { CanchasCrudModule } from './vistas/canchas-crud/canchas-crud.module';
import { CanchasDashboardModule } from './vistas/canchas-dashboard/canchas-dashboard.module';
import { CommitModule } from './vistas/commit/commit.module';
import { CrudsubadminModule } from './vistas/crudsubadmin/crudsubadmin.module';
import { FormularioRegistroModule } from './vistas/formulario-registro/formulario-registro.module';
import { GraciasModule } from './vistas/gracias/gracias.module';
import { LoginModule } from './vistas/login/login.module';
import { PrimerForemularioModule } from './vistas/primer-foremulario/primer-foremulario.module';
import { SelectCanchasModule } from './vistas/select-canchas/select-canchas.module';
import { SelectReservaModule } from './vistas/select-reserva/select-reserva.module';
import { SubdominiosModule } from './vistas/subdominios/subdominios.module';
import { IniciomodcanchaModule } from './vistas/iniciomodcancha/iniciomodcancha.module';
import { IniciousercanchaModule } from './vistas/iniciousercancha/iniciousercancha.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { IniciosubadmincanchaModule } from './vistas/iniciosubadmincancha/iniciosubadmincancha.module';
import { TorneoscrudComponent } from './vistas/torneoscrud/torneoscrud.component';
import { CrearTorneoComponent } from './vistas/crear-torneo/crear-torneo.component';
import { TorneoDetallesComponent } from './vistas/torneo-detalles/torneo-detalles.component';
import { AjustesTorneosComponent } from './vistas/ajustes-torneos/ajustes-torneos.component';
import { AjustesTorneosModule } from './vistas/ajustes-torneos/ajustes-torneos.module';
import { CrearTorneoModule } from './vistas/crear-torneo/crear-torneo.module';
import { TorneoscrudModule } from './vistas/torneoscrud/torneoscrud.module';
import { TorneoDetallesModule } from './vistas/torneo-detalles/torneo-detalles.module';
import { RegistroelbichoModule } from './vistas/registroelbicho/registroelbicho.module';
import { CalendarioModule } from './vistas/calendario/calendario.module';
import { InscripcionTorneoModule } from './vistas/inscripcion-torneo/inscripcion-torneo.module';


import { VerGrillasComponent } from './vistas/grilla/pages/ver-grillas/ver-grillas.component';
import { GrillaModule } from './vistas/grilla/grilla.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    VerGrillasComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxChartsModule,
    CommonModule,
    PlantillasModule,
    PipesModule,
    PaginaModule,
    ProfesorVistaModule,
    VistaAdminModule,
    CanchasCrudModule,
    CanchasDashboardModule,
    CommitModule,
    CrudsubadminModule,
    FormularioRegistroModule,
    GraciasModule,
    LoginModule,
    PrimerForemularioModule,
    SelectCanchasModule,
    SelectReservaModule,
    SubdominiosModule,
    IniciomodcanchaModule,
    IniciousercanchaModule,
    IniciosubadmincanchaModule,
    CrearTorneoModule,
    TorneoscrudModule,
    TorneoDetallesModule,
    RegistroelbichoModule,
    CalendarioModule,
    InscripcionTorneoModule,
    GrillaModule,
    DialogModule,

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
