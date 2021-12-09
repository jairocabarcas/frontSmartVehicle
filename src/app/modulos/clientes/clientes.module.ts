import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { ActualizarClienteComponent } from './actualizar-cliente/actualizar-cliente.component';
import { EliminarClienteComponent } from './eliminar-cliente/eliminar-cliente.component';


@NgModule({
  declarations: [
    RegistrarClienteComponent,
    ConsultarClienteComponent,
    ActualizarClienteComponent,
    EliminarClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
