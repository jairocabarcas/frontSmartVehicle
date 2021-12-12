import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = "http://localhost:3000";
  datosUsuario = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  constructor(private http: HttpClient) {
    this.verificarSesionActual();
  }

  identificar(usuario: string, password: string): Observable<ModeloIdentificar>{
    
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarPersona`,{
      usuario: usuario,
      clave: password
    },{
      headers: new HttpHeaders({})
    })
  }

  almacenarService(datos:ModeloIdentificar){
    datos.estaIdentificado=true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
    localStorage.setItem("logueado","true");
    this.refrescarDatosSesion(datos)
  }

  obetenerInfoSesion(){
    let datosSesion = localStorage.getItem("datosSesion");
    if(datosSesion){
      let datos = JSON.parse(datosSesion);
      return datos;
    }else{
      return null;
    }
  }

  eliminarInfoSesion(){
    localStorage.removeItem("datosSesion")
    this.refrescarDatosSesion(new ModeloIdentificar)
    localStorage.setItem("logueado","false")
  }
  
  isLogin(){
    let datosSesion = localStorage.getItem("datosSesion");
    return datosSesion;
  }

  verificarSesionActual(){
    let datos = this.usuarioEnSesion();
    if(datos){
      this.refrescarDatosSesion(datos);
    }
  }

  refrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuario.next(datos)
  }

  usuarioEnSesion():any{
    return this.datosUsuario.asObservable 
  }
  

}
