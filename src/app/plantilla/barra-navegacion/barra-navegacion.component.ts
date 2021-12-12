import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';


@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  inicioSesion: boolean= false;
  subs: Subscription = new Subscription();

  constructor(private seguridaService: SeguridadService) {}

  ngOnInit(): void {
    setInterval(()=>{
      this.sesioniniciada();
    },1000)
    
  }
  sesioniniciada(){
    /*this.subs=this.seguridaService.usuarioEnSesion().subscribe((datos:any)=>{
      this.inicioSesion=datos.estaIdentificado;
    },((error:any)=>{
      alert("no hace cambio de etiquetas");
    }))*/
    let estado = localStorage.getItem("logueado");
    if(estado=="true"){
      this.inicioSesion = true;
    }else{
      this.inicioSesion = false;
    }
  }
}
