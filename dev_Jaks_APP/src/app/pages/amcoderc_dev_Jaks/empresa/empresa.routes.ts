import { Routes } from '@angular/router';
import { EmpresaComponent } from './empresa.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';

export const EmpresaRoutes: Routes = [
  {
    path: '',
    component: EmpresaComponent,
    children: [
      {
        path: '',
        component: EmpresaListComponent,
      },
      {
        path: 'add',
        component: EmpresaFormComponent,
      },
      {
        path: 'edit/:id',
        component: EmpresaFormComponent,
      }
    ],
  },
];

