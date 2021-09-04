import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from 'src/app/pipes/_codemono/pipes.module';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomAdapter, DatePickerService } from 'src/app/services/_codemono/datepicker.service';

import { UsuarioPerfilRoutes } from './usuario-perfil.routes';
import { UsuarioPerfilComponent } from './usuario-perfil.component';
import { UsuarioPerfilListComponent } from './usuario-perfil-list/usuario-perfil-list.component';
import { UsuarioPerfilFormComponent } from './usuario-perfil-form/usuario-perfil-form.component';


@NgModule({
  declarations: [
    UsuarioPerfilComponent,
    UsuarioPerfilListComponent,
    UsuarioPerfilFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UsuarioPerfilRoutes),
    PipesModule,
    NgbModule,
    TableModule,
    SidebarModule,
    NgSelectModule
  ],
  bootstrap: [UsuarioPerfilComponent],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: DatePickerService}
  ]
})

export class UsuarioPerfilModule { }

