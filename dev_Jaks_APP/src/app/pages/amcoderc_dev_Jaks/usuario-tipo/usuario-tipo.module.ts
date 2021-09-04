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

import { UsuarioTipoRoutes } from './usuario-tipo.routes';
import { UsuarioTipoComponent } from './usuario-tipo.component';
import { UsuarioTipoListComponent } from './usuario-tipo-list/usuario-tipo-list.component';
import { UsuarioTipoFormComponent } from './usuario-tipo-form/usuario-tipo-form.component';


@NgModule({
  declarations: [
    UsuarioTipoComponent,
    UsuarioTipoListComponent,
    UsuarioTipoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UsuarioTipoRoutes),
    PipesModule,
    NgbModule,
    TableModule,
    SidebarModule,
    NgSelectModule
  ],
  bootstrap: [UsuarioTipoComponent],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: DatePickerService}
  ]
})

export class UsuarioTipoModule { }

