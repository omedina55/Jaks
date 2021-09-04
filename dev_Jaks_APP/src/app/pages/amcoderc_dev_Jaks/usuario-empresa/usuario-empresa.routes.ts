import { Routes } from '@angular/router';
import { UsuarioEmpresaComponent } from './usuario-empresa.component';
import { UsuarioEmpresaListComponent } from './usuario-empresa-list/usuario-empresa-list.component';
import { UsuarioEmpresaFormComponent } from './usuario-empresa-form/usuario-empresa-form.component';

export const UsuarioEmpresaRoutes: Routes = [
  {
    path: '',
    component: UsuarioEmpresaComponent,
    children: [
      {
        path: '',
        component: UsuarioEmpresaListComponent,
      },
      {
        path: 'add',
        component: UsuarioEmpresaFormComponent,
      },
      {
        path: 'edit/:id',
        component: UsuarioEmpresaFormComponent,
      }
    ],
  },
];

