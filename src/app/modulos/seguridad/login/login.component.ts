import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group(
    {
      'usuario': ['',[Validators.required, Validators.email]],
      'password': ['',[Validators.required]]
    }
  );

  constructor(
    private fb: FormBuilder, 
    private seguridadService:SeguridadService,
    private router: Router,
  ) { }

  ngOnInit(): void {}
  
  identifiacrUsuario(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let password = this.fgValidador.controls['password'].value;
    this.seguridadService.identificar(usuario,password).subscribe(((datos:ModeloIdentificar): void=>{
      this.seguridadService.almacenarService(datos);
      this.router.navigate(['/inicio'])
    }),((error:any)=>{
      alert("Usuario no valido");
    }));

  }

}
