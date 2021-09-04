import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LayoutInitialComponent } from './layout/layout-initial/layout-initial.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/_codemono/authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/_codemono/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'start',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/_codemono/start/start.module').then((m) => m.StartModule),
      }
    ]
  },
  {
    path: 'profile',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/_codemono/profile/profile.module').then((m) => m.ProfileModule),
      }
    ]
  },
  {
    path: 'user',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/_codemono/user/user.module').then((m) => m.UserModule),
      }
    ]
  },
  {
    path: 'ng-bootstrap',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/_codemono/ng-bootstrap/ng-bootstrap.module').then((m) => m.NgBootstrapModule),
      }
    ]
  },
  {
    path: 'projects',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/_codemono/projects/projects.module').then((m) => m.ProjectsModule),
      }
    ]
  },
  {
    path: 'task',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/_codemono/task/task.module').then((m) => m.TaskModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/configuracion',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/configuracion/configuracion.module').then((m) => m.ConfiguracionModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/empresa',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/empresa/empresa.module').then((m) => m.EmpresaModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/eventoTipo',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/evento-tipo/evento-tipo.module').then((m) => m.EventoTipoModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/facturaGlobal',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/factura-global/factura-global.module').then((m) => m.FacturaGlobalModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/facturaGlobalDetalle',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/factura-global-detalle/factura-global-detalle.module').then((m) => m.FacturaGlobalDetalleModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/facturaGlobalDetalleTaxes',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/factura-global-detalle-taxes/factura-global-detalle-taxes.module').then((m) => m.FacturaGlobalDetalleTaxesModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/facturaGlobalEvento',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/factura-global-evento/factura-global-evento.module').then((m) => m.FacturaGlobalEventoModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/nsConsulta',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/ns-consulta/ns-consulta.module').then((m) => m.NsConsultaModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/perfil',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/perfil/perfil.module').then((m) => m.PerfilModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/periodoEmpresa',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/periodo-empresa/periodo-empresa.module').then((m) => m.PeriodoEmpresaModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/usuario',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/usuario/usuario.module').then((m) => m.UsuarioModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/usuarioEmpresa',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/usuario-empresa/usuario-empresa.module').then((m) => m.UsuarioEmpresaModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/usuarioPerfil',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/usuario-perfil/usuario-perfil.module').then((m) => m.UsuarioPerfilModule),
      }
    ]
  },
  {
    path: 'amcoderc_dev_Jaks/usuarioTipo',
    component: LayoutInitialComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/amcoderc_dev_Jaks/usuario-tipo/usuario-tipo.module').then((m) => m.UsuarioTipoModule),
      }
    ]
  },
  // CODEMONO: NO REMOVE THIS COMMENT (ROUTING MODULE)
  { path: 'login', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }














