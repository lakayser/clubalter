import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './home/profile/profile.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './servicios/token-interceptor.service';
import { IndexComponent } from './pagina/index/index.component';
import { KbotAgendaComponent } from './pagina/kbot-agenda/kbot-agenda.component';
import { KbotMarketComponent } from './pagina/kbot-market/kbot-market.component';
import { KbotPersonalizadoComponent } from './pagina/kbot-personalizado/kbot-personalizado.component';
import { EspecialistasComponent } from './vistas/especialistas/especialistas.component';
import { HorarioComponent } from './vistas/horario/horario.component';
import { BoxComponent } from './vistas/box/box.component';
import { ObjToArrayPipe } from './objToArray.pipe';
import { LugarComponent } from './vistas/lugar/lugar.component';
import { SidebarComponent } from './plantillas/sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { PortalPagoComponent } from './pagina/portal-pago/portal-pago.component';
import { AgendarhoraComponent } from './vistas/agendarhora/agendarhora.component';
import { AgendarPacienteComponent } from './vistas/agendar-paciente/agendar-paciente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerComponent } from './vistas/datepicker/datepicker.component';
import { CommonModule } from '@angular/common';
import { OcupationComponent } from './vistas/ocupation/ocupation.component';
import { OrganizationComponent } from './vistas/organization/organization.component';
import { AdminusuariosComponent } from './vistaAdmin/adminusuarios/adminusuarios.component';
import { DashboardadminComponent } from './vistaAdmin/dashboardadmin/dashboardadmin.component';
import { OrganizacionesAdminComponent } from './vistaAdmin/organizaciones-admin/organizaciones-admin.component';
import { CanchasDashboardComponent } from './vistas/canchas-dashboard/canchas-dashboard.component';
import { CanchasReservarComponent } from './vistas/canchas-reservar/canchas-reservar.component';

// import { LoginComponent } from './vistas/login/login.component';
// import { DashboardComponent } from './vistas/dashboard/dashboard.component';
const materialModules = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    ProfileComponent,
    IndexComponent,
    KbotAgendaComponent,
    KbotMarketComponent,
    KbotPersonalizadoComponent,
    EspecialistasComponent,
    HorarioComponent,
    BoxComponent,
    ObjToArrayPipe,
    LugarComponent,
    SidebarComponent,
    PortalPagoComponent,
    AgendarhoraComponent,
    AgendarPacienteComponent,
    DatepickerComponent,
    OcupationComponent,
    OrganizationComponent,
    AdminusuariosComponent,
    DashboardadminComponent,
    OrganizacionesAdminComponent,
    CanchasDashboardComponent,
    CanchasReservarComponent,
    
    
    
  
    // LoginComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule,
    CommonModule,
    materialModules,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
    
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
