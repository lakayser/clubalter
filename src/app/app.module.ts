import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

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

// import { LoginComponent } from './vistas/login/login.component';
// import { DashboardComponent } from './vistas/dashboard/dashboard.component';

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
    
  
    // LoginComponent,
    // DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule
    
  ],
  providers: [ AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
