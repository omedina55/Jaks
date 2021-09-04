import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

export const UsuarioRoutes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {
        path: '',
        component: UsuarioListComponent,
      },
      {
        path: 'add',
        component: UsuarioFormComponent,
      },
      {
        path: 'edit/:id',
        component: UsuarioFormComponent,
      }
    ],
  },
];

