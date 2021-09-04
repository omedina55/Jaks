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

import { PerfilRoutes } from './perfil.routes';
import { PerfilComponent } from './perfil.component';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';


@NgModule({
  declarations: [
    PerfilComponent,
    PerfilListComponent,
    PerfilFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(PerfilRoutes),
    PipesModule,
    NgbModule,
    TableModule,
    SidebarModule,
    NgSelectModule
  ],
  bootstrap: [PerfilComponent],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: DatePickerService}
  ]
})

export class PerfilModule { }

