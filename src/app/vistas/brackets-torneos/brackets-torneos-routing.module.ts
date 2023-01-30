import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BracketOchoComponent } from './pages/bracket-ocho/bracket-ocho.component';

const routes: Routes = [
  {
    path     : 'bracket/:id',
    component: BracketOchoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BracketsTorneosRoutingModule { }
