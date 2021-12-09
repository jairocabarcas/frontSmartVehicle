import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'seguridad',
    loadChildren: () => import("./modulos/seguridad/seguridad.module")
    .then(modulo => modulo.SeguridadModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import("./modulos/administracion/administracion.module")
    .then(modulo => modulo.AdministracionModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import("./modulos/clientes/clientes.module")
    .then(modulo => modulo.ClientesModule)
  },
  {
    path: 'solicitud',
    loadChildren: () => import("./modulos/solicitudes/solicitudes.module")
    .then(modulo => modulo.SolicitudesModule)
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
