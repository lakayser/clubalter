import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD:src/app/vistas/crudsubadmin/crudsubadmin.module.ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CrudsubadminComponent } from './crudsubadmin.component';
import { DialogModule } from 'primeng/dialog';
=======
import { CrudsubadminComponent } from './crudsubadmin.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/pipes.module';

>>>>>>> 9201907a2ed75db9fc7749f2e2b0f907238b2256:src/app/vistas/adminPages/pages/crud-sub/crud-sub.module.ts


@NgModule({
  declarations: [
    CrudsubadminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
<<<<<<< HEAD:src/app/vistas/crudsubadmin/crudsubadmin.module.ts
    DialogModule
   
  ],
=======
  ]
>>>>>>> 9201907a2ed75db9fc7749f2e2b0f907238b2256:src/app/vistas/adminPages/pages/crud-sub/crud-sub.module.ts
})
export class CrudSubModule { }
