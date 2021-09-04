import { Routes } from '@angular/router';
import { ConfiguracionComponent } from './configuracion.component';
import { ConfiguracionListComponent } from './configuracion-list/configuracion-list.component';
import { ConfiguracionFormComponent } from './configuracion-form/configuracion-form.component';

export const ConfiguracionRoutes: Routes = [
  {
    path: '',
    component: ConfiguracionComponent,
    children: [
      {
        path: '',
        component: ConfiguracionListComponent,
      },
      {
        path: 'add',
        component: ConfiguracionFormComponent,
      },
      {
        path: 'edit/:id',
        component: ConfiguracionFormComponent,
      }
    ],
  },
];

