import { Routes } from '@angular/router';
import { UsuarioPerfilComponent } from './usuario-perfil.component';
import { UsuarioPerfilListComponent } from './usuario-perfil-list/usuario-perfil-list.component';
import { UsuarioPerfilFormComponent } from './usuario-perfil-form/usuario-perfil-form.component';

export const UsuarioPerfilRoutes: Routes = [
  {
    path: '',
    component: UsuarioPerfilComponent,
    children: [
      {
        path: '',
        component: UsuarioPerfilListComponent,
      },
      {
        path: 'add',
        component: UsuarioPerfilFormComponent,
      },
      {
        path: 'edit/:id',
        component: UsuarioPerfilFormComponent,
      }
    ],
  },
];

