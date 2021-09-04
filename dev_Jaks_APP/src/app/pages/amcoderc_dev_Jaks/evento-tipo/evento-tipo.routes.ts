import { Routes } from '@angular/router';
import { EventoTipoComponent } from './evento-tipo.component';
import { EventoTipoListComponent } from './evento-tipo-list/evento-tipo-list.component';
import { EventoTipoFormComponent } from './evento-tipo-form/evento-tipo-form.component';

export const EventoTipoRoutes: Routes = [
  {
    path: '',
    component: EventoTipoComponent,
    children: [
      {
        path: '',
        component: EventoTipoListComponent,
      },
      {
        path: 'add',
        component: EventoTipoFormComponent,
      },
      {
        path: 'edit/:id',
        component: EventoTipoFormComponent,
      }
    ],
  },
];

