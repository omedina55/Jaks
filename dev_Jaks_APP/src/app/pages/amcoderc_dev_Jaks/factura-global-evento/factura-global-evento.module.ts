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

import { FacturaGlobalEventoRoutes } from './factura-global-evento.routes';
import { FacturaGlobalEventoComponent } from './factura-global-evento.component';
import { FacturaGlobalEventoListComponent } from './factura-global-evento-list/factura-global-evento-list.component';
import { FacturaGlobalEventoFormComponent } from './factura-global-evento-form/factura-global-evento-form.component';


@NgModule({
  declarations: [
    FacturaGlobalEventoComponent,
    FacturaGlobalEventoListComponent,
    FacturaGlobalEventoFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(FacturaGlobalEventoRoutes),
    PipesModule,
    NgbModule,
    TableModule,
    SidebarModule,
    NgSelectModule
  ],
  bootstrap: [FacturaGlobalEventoComponent],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: DatePickerService}
  ]
})

export class FacturaGlobalEventoModule { }

