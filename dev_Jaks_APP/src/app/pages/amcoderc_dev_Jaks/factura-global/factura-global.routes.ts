import { Routes } from '@angular/router';
import { FacturaGlobalComponent } from './factura-global.component';
import { FacturaGlobalListComponent } from './factura-global-list/factura-global-list.component';
import { FacturaGlobalFormComponent } from './factura-global-form/factura-global-form.component';

export const FacturaGlobalRoutes: Routes = [
  {
    path: '',
    component: FacturaGlobalComponent,
    children: [
      {
        path: '',
        component: FacturaGlobalListComponent,
      },
      {
        path: 'add',
        component: FacturaGlobalFormComponent,
      },
      {
        path: 'edit/:id',
        component: FacturaGlobalFormComponent,
      }
    ],
  },
];

