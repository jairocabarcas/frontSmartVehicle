import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloCliente } from '../modelos/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  registrarCliente(datos:any): Observable<any>{
    
    return this.http.post(`${this.url}/clientes`,{
      nombre: datos.nombre,
      apellido: datos.apellido,
      tipoDocumento: datos.tipoDocumento,
      documento: datos.documento,
      fechaNacimiento: `${datos.fechaNacimiento}T05:00:00.000+00:00`,
      genero: datos.genero,
      correo: datos.correo,
      clave: datos.clave,
      celular: datos.celular,
      direccion: datos.direccion,
      departamento: datos.departamento,
      ciudad: datos.ciudad
    },{
      headers: new HttpHeaders({})
    })
  }
  
}
