import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterJugadorModule } from './pages/registerJugador/register-jugador.module';
import { RegisterUsuarioModule } from './pages/registerUsuario/register-usuario.module';



@NgModule({
  declarations: [
  ],
  imports: [
    AuthRoutingModule,
    LoginModule,
    RegisterJugadorModule,
    RegisterUsuarioModule,
  ]
})
export class AuthModule { }
