import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { CrearSolicitudComponent } from './crear-solicitud/crear-solicitud.component';
import { ConsultarSolicitudComponent } from './consultar-solicitud/consultar-solicitud.component';
import { ActualizarSolicitudComponent } from './actualizar-solicitud/actualizar-solicitud.component';


@NgModule({
  declarations: [
    CrearSolicitudComponent,
    ConsultarSolicitudComponent,
    ActualizarSolicitudComponent
  ],
  imports: [
    CommonModule,
    SolicitudesRoutingModule
  ]
})
export class SolicitudesModule { }
