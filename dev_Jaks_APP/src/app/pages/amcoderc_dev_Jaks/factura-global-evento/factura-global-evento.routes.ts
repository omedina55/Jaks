import { Routes } from '@angular/router';
import { FacturaGlobalEventoComponent } from './factura-global-evento.component';
import { FacturaGlobalEventoListComponent } from './factura-global-evento-list/factura-global-evento-list.component';
import { FacturaGlobalEventoFormComponent } from './factura-global-evento-form/factura-global-evento-form.component';

export const FacturaGlobalEventoRoutes: Routes = [
  {
    path: '',
    component: FacturaGlobalEventoComponent,
    children: [
      {
        path: '',
        component: FacturaGlobalEventoListComponent,
      },
      {
        path: 'add',
        component: FacturaGlobalEventoFormComponent,
      },
      {
        path: 'edit/:id',
        component: FacturaGlobalEventoFormComponent,
      }
    ],
  },
];

