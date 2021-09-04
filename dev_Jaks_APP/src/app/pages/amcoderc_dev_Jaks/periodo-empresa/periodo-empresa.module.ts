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

import { PeriodoEmpresaRoutes } from './periodo-empresa.routes';
import { PeriodoEmpresaComponent } from './periodo-empresa.component';
import { PeriodoEmpresaListComponent } from './periodo-empresa-list/periodo-empresa-list.component';
import { PeriodoEmpresaFormComponent } from './periodo-empresa-form/periodo-empresa-form.component';


@NgModule({
  declarations: [
    PeriodoEmpresaComponent,
    PeriodoEmpresaListComponent,
    PeriodoEmpresaFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(PeriodoEmpresaRoutes),
    PipesModule,
    NgbModule,
    TableModule,
    SidebarModule,
    NgSelectModule
  ],
  bootstrap: [PeriodoEmpresaComponent],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: DatePickerService}
  ]
})

export class PeriodoEmpresaModule { }

