import { Routes } from '@angular/router';
import { UsuarioTipoComponent } from './usuario-tipo.component';
import { UsuarioTipoListComponent } from './usuario-tipo-list/usuario-tipo-list.component';
import { UsuarioTipoFormComponent } from './usuario-tipo-form/usuario-tipo-form.component';

export const UsuarioTipoRoutes: Routes = [
  {
    path: '',
    component: UsuarioTipoComponent,
    children: [
      {
        path: '',
        component: UsuarioTipoListComponent,
      },
      {
        path: 'add',
        component: UsuarioTipoFormComponent,
      },
      {
        path: 'edit/:id',
        component: UsuarioTipoFormComponent,
      }
    ],
  },
];

