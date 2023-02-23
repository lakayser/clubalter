import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registerJugador/registroelbicho.component';
import { PrimerForemularioComponent } from './pages/registerUsuario/primer-foremulario.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path     : 'login',
        component: LoginComponent,
      },
      {
        path     : 'registerJugador/:id',
        component: RegistroComponent,
      },
      {
        path     : 'registerUsuario',
        component: PrimerForemularioComponent,
      },
      {
        path     : '**',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AuthRoutingModule { }
