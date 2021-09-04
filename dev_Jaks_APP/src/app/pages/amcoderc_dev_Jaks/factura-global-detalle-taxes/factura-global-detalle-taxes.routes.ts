import { Routes } from '@angular/router';
import { FacturaGlobalDetalleTaxesComponent } from './factura-global-detalle-taxes.component';
import { FacturaGlobalDetalleTaxesListComponent } from './factura-global-detalle-taxes-list/factura-global-detalle-taxes-list.component';
import { FacturaGlobalDetalleTaxesFormComponent } from './factura-global-detalle-taxes-form/factura-global-detalle-taxes-form.component';

export const FacturaGlobalDetalleTaxesRoutes: Routes = [
  {
    path: '',
    component: FacturaGlobalDetalleTaxesComponent,
    children: [
      {
        path: '',
        component: FacturaGlobalDetalleTaxesListComponent,
      },
      {
        path: 'add',
        component: FacturaGlobalDetalleTaxesFormComponent,
      },
      {
        path: 'edit/:id',
        component: FacturaGlobalDetalleTaxesFormComponent,
      }
    ],
  },
];

