import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigProfileComponent } from './config-profile.component';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';
import { PipesModule } from 'src/app/pipes/pipes.module';


@NgModule({
  declarations: [
    ConfigProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    TabViewModule,
    PipesModule
  ]
})
export class ConfigProfileModule { }
