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

import { UsuarioEmpresaRoutes } from './usuario-empresa.routes';
import { UsuarioEmpresaComponent } from './usuario-empresa.component';
import { UsuarioEmpresaListComponent } from './usuario-empresa-list/usuario-empresa-list.component';
import { UsuarioEmpresaFormComponent } from './usuario-empresa-form/usuario-empresa-form.component';


@NgModule({
  declarations: [
    UsuarioEmpresaComponent,
    UsuarioEmpresaListComponent,
    UsuarioEmpresaFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UsuarioEmpresaRoutes),
    PipesModule,
    NgbModule,
    TableModule,
    SidebarModule,
    NgSelectModule
  ],
  bootstrap: [UsuarioEmpresaComponent],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: DatePickerService}
  ]
})

export class UsuarioEmpresaModule { }

