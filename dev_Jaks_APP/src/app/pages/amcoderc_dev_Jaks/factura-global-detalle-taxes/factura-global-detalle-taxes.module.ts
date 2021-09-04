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

import { FacturaGlobalDetalleTaxesRoutes } from './factura-global-detalle-taxes.routes';
import { FacturaGlobalDetalleTaxesComponent } from './factura-global-detalle-taxes.component';
import { FacturaGlobalDetalleTaxesListComponent } from './factura-global-detalle-taxes-list/factura-global-detalle-taxes-list.component';
import { FacturaGlobalDetalleTaxesFormComponent } from './factura-global-detalle-taxes-form/factura-global-detalle-taxes-form.component';


@NgModule({
  declarations: [
    FacturaGlobalDetalleTaxesComponent,
    FacturaGlobalDetalleTaxesListComponent,
    FacturaGlobalDetalleTaxesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(FacturaGlobalDetalleTaxesRoutes),
    PipesModule,
    NgbModule,
    TableModule,
    SidebarModule,
    NgSelectModule
  ],
  bootstrap: [FacturaGlobalDetalleTaxesComponent],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: DatePickerService}
  ]
})

export class FacturaGlobalDetalleTaxesModule { }

