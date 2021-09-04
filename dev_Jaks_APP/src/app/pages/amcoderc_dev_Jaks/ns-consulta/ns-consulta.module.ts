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

import { NsConsultaRoutes } from './ns-consulta.routes';
import { NsConsultaComponent } from './ns-consulta.component';
import { NsConsultaListComponent } from './ns-consulta-list/ns-consulta-list.component';
import { NsConsultaFormComponent } from './ns-consulta-form/ns-consulta-form.component';


@NgModule({
  declarations: [
    NsConsultaComponent,
    NsConsultaListComponent,
    NsConsultaFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(NsConsultaRoutes),
    PipesModule,
    NgbModule,
    TableModule,
    SidebarModule,
    NgSelectModule
  ],
  bootstrap: [NsConsultaComponent],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: DatePickerService}
  ]
})

export class NsConsultaModule { }

