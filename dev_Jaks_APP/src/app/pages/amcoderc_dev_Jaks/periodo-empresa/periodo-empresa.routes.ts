import { Routes } from '@angular/router';
import { PeriodoEmpresaComponent } from './periodo-empresa.component';
import { PeriodoEmpresaListComponent } from './periodo-empresa-list/periodo-empresa-list.component';
import { PeriodoEmpresaFormComponent } from './periodo-empresa-form/periodo-empresa-form.component';

export const PeriodoEmpresaRoutes: Routes = [
  {
    path: '',
    component: PeriodoEmpresaComponent,
    children: [
      {
        path: '',
        component: PeriodoEmpresaListComponent,
      },
      {
        path: 'add',
        component: PeriodoEmpresaFormComponent,
      },
      {
        path: 'edit/:id',
        component: PeriodoEmpresaFormComponent,
      }
    ],
  },
];

