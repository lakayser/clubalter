import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuadrosComponent } from './pages/cuadros/cuadros.component';

const routes: Routes = [
  {
    path     : 'cuadro/:id',
    component: CuadrosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuadrosTorneosRoutingModule { }
