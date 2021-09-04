import { Routes } from '@angular/router';
import { NsConsultaComponent } from './ns-consulta.component';
import { NsConsultaListComponent } from './ns-consulta-list/ns-consulta-list.component';
import { NsConsultaFormComponent } from './ns-consulta-form/ns-consulta-form.component';

export const NsConsultaRoutes: Routes = [
  {
    path: '',
    component: NsConsultaComponent,
    children: [
      {
        path: '',
        component: NsConsultaListComponent,
      },
      {
        path: 'add',
        component: NsConsultaFormComponent,
      },
      {
        path: 'edit/:id',
        component: NsConsultaFormComponent,
      }
    ],
  },
];

