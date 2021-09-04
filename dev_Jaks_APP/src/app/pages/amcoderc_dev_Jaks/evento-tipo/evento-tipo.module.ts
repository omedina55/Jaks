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

import { EventoTipoRoutes } from './evento-tipo.routes';
import { EventoTipoComponent } from './evento-tipo.component';
import { EventoTipoListComponent } from './evento-tipo-list/evento-tipo-list.component';
import { EventoTipoFormComponent } from './evento-tipo-form/evento-tipo-form.component';


@NgModule({
  declarations: [
    EventoTipoComponent,
    EventoTipoListComponent,
    EventoTipoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(EventoTipoRoutes),
    PipesModule,
    NgbModule,
    TableModule,
    SidebarModule,
    NgSelectModule
  ],
  bootstrap: [EventoTipoComponent],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: DatePickerService}
  ]
})

export class EventoTipoModule { }

