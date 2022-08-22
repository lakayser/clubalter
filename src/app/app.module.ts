import { NgModule }                               from '@angular/core';
import { BrowserModule }                          from '@angular/platform-browser';
import { NgChartsModule }                         from 'ng2-charts';
import { MatDatepickerModule }                    from '@angular/material/datepicker';
import { MatNativeDateModule }                    from '@angular/material/core';
import { MatFormFieldModule }                     from '@angular/material/form-field';
import { MatInputModule }                         from '@angular/material/input';
import { MatToolbarModule }                       from '@angular/material/toolbar';
import { MatSidenavModule }                       from '@angular/material/sidenav';
import { MatButtonModule }                        from '@angular/material/button'
import { MatIconModule}                           from '@angular/material/icon';
import { MatDividerModule }                       from '@angular/material/divider';
import { AppRoutingModule, routingComponents }    from './app-routing.module';
import { AppComponent }                           from './app.component';
import { HeaderComponent }                        from './plantillas/header/header.component';
import { FooterComponent }                        from './plantillas/footer/footer.component';
import { ReactiveFormsModule, FormsModule }       from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { AuthGuard }                              from './auth.guard';
import { TokenInterceptorService }                from './servicios/token-interceptor.service';
import { IndexComponent }                         from './pagina/index/index.component';
import { KbotAgendaComponent }                    from './pagina/kbot-agenda/kbot-agenda.component';
import { KbotMarketComponent }                    from './pagina/kbot-market/kbot-market.component';
import { KbotPersonalizadoComponent }             from './pagina/kbot-personalizado/kbot-personalizado.component';
import { ObjToArrayPipe }                         from './objToArray.pipe';
import { SidebarComponent }                       from './plantillas/sidebar/sidebar.component';
import { PortalPagoComponent }                    from './pagina/portal-pago/portal-pago.component';
import { BrowserAnimationsModule }                from '@angular/platform-browser/animations';
import { CommonModule }                           from '@angular/common';
import { AdminusuariosComponent }                 from './vistaAdmin/adminusuarios/adminusuarios.component';
import { DashboardadminComponent }                from './vistaAdmin/dashboardadmin/dashboardadmin.component';
import { OrganizacionesAdminComponent }           from './vistaAdmin/organizaciones-admin/organizaciones-admin.component';
import { CanchasDashboardComponent }              from './vistas/canchas-dashboard/canchas-dashboard.component';
import { CanchasCrudComponent }                   from './vistas/canchas-crud/canchas-crud.component';
import { UsermoderatorComponent }                 from './vistaAdmin/usermoderator/usermoderator.component';
import { DashboardProfesorComponent }             from './profesor-vista/dashboard-profesor/dashboard-profesor.component';
import { ClaseCrudComponent }                     from './profesor-vista/clase-crud/clase-crud.component';
import { PagoComponent }                          from './pagina/pago/pago.component';
import { FilterPipe }                             from './pipes/filter.pipe';
import { SelectCanchasComponent }                 from './vistas/select-canchas/select-canchas.component';
import { SelectReservaComponent }                 from './vistas/select-reserva/select-reserva.component';
import { CommitComponent }                        from './vistas/commit/commit.component';
import { FormularioRegistroComponent } from './vistas/formulario-registro/formulario-registro.component';
import { PrimerForemularioComponent } from './vistas/primer-foremulario/primer-foremulario.component';

const materialModules = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule
];
@NgModule({
  declarations: [ AppComponent, HeaderComponent, FooterComponent, routingComponents,
                  IndexComponent, KbotAgendaComponent, KbotMarketComponent, KbotPersonalizadoComponent,
                  ObjToArrayPipe, SidebarComponent, PortalPagoComponent, AdminusuariosComponent, DashboardadminComponent,
                  OrganizacionesAdminComponent, CanchasDashboardComponent, CanchasCrudComponent, UsermoderatorComponent,
                  DashboardProfesorComponent, ClaseCrudComponent, PagoComponent, FilterPipe, SelectCanchasComponent,
                  SelectReservaComponent, CommitComponent, FormularioRegistroComponent, PrimerForemularioComponent,
                ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule, NgChartsModule,
    BrowserAnimationsModule, CommonModule, materialModules,MatDatepickerModule, MatNativeDateModule, MatInputModule,
    MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, MatDividerModule,
  ],
  exports: [
    materialModules
  ],
  providers: [ AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
