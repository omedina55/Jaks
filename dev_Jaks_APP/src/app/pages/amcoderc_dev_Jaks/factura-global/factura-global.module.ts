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

import { FacturaGlobalRoutes } from './factura-global.routes';
import { FacturaGlobalComponent } from './factura-global.component';
import { FacturaGlobalListComponent } from './factura-global-list/factura-global-list.component';
import { FacturaGlobalFormComponent } from './factura-global-form/factura-global-form.component';


@NgModule({
  declarations: [
    FacturaGlobalComponent,
    FacturaGlobalListComponent,
    FacturaGlobalFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(FacturaGlobalRoutes),
    PipesModule,
    NgbModule,
    TableModule,
    SidebarModule,
    NgSelectModule
  ],
  bootstrap: [FacturaGlobalComponent],
  providers: [
    {provide: NgbDateAdapter, useClass: CustomAdapter},
    {provide: NgbDateParserFormatter, useClass: DatePickerService}
  ]
})

export class FacturaGlobalModule { }

