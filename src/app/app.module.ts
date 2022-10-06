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
import { CalendarModule } from './vistas/canchaEspe/calendar.module';
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


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    PlantillasModule,
    PipesModule,
    PaginaModule,
    ProfesorVistaModule,
    VistaAdminModule,
    CalendarModule,
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
  ],

  exports: [
  ],
  providers: [ AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
