import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';

export const PerfilRoutes: Routes = [
  {
    path: '',
    component: PerfilComponent,
    children: [
      {
        path: '',
        component: PerfilListComponent,
      },
      {
        path: 'add',
        component: PerfilFormComponent,
      },
      {
        path: 'edit/:id',
        component: PerfilFormComponent,
      }
    ],
  },
];

