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

import { UsuarioRoutes } from './usuario.routes';
import { UsuarioComponent } from './usuario.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioListComponent,
    UsuarioFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(UsuarioRoutes),
    PipesModule,
    NgbModule,
    TableModule,
    SidebarModule,
    NgSelectModule
  ],
  bootstrap: [UsuarioComponent],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: DatePickerService}
  ]
})

export class UsuarioModule { }

