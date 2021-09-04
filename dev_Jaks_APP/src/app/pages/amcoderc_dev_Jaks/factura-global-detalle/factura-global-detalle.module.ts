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

import { FacturaGlobalDetalleRoutes } from './factura-global-detalle.routes';
import { FacturaGlobalDetalleComponent } from './factura-global-detalle.component';
import { FacturaGlobalDetalleListComponent } from './factura-global-detalle-list/factura-global-detalle-list.component';
import { FacturaGlobalDetalleFormComponent } from './factura-global-detalle-form/factura-global-detalle-form.component';


@NgModule({
  declarations: [
    FacturaGlobalDetalleComponent,
    FacturaGlobalDetalleListComponent,
    FacturaGlobalDetalleFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(FacturaGlobalDetalleRoutes),
    PipesModule,
    NgbModule,
    TableModule,
    SidebarModule,
    NgSelectModule
  ],
  bootstrap: [FacturaGlobalDetalleComponent],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: DatePickerService}
  ]
})

export class FacturaGlobalDetalleModule { }

