import { Routes } from '@angular/router';
import { FacturaGlobalDetalleComponent } from './factura-global-detalle.component';
import { FacturaGlobalDetalleListComponent } from './factura-global-detalle-list/factura-global-detalle-list.component';
import { FacturaGlobalDetalleFormComponent } from './factura-global-detalle-form/factura-global-detalle-form.component';

export const FacturaGlobalDetalleRoutes: Routes = [
  {
    path: '',
    component: FacturaGlobalDetalleComponent,
    children: [
      {
        path: '',
        component: FacturaGlobalDetalleListComponent,
      },
      {
        path: 'add',
        component: FacturaGlobalDetalleFormComponent,
      },
      {
        path: 'edit/:id',
        component: FacturaGlobalDetalleFormComponent,
      }
    ],
  },
];

