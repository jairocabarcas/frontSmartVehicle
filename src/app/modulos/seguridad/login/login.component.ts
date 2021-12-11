import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private seguridadService:SeguridadService
  ) { }

  ngOnInit(): void {
    
  }
  identifiacrUsuario(){
    let usuario = this.fgValidador.controls['usuario'].value;
    let password = this.fgValidador.controls['password'].value;
    this.seguridadService.identificar(usuario,password)
    .subscribe((datos:any)=>{
      alert("Usuario Existe")
    },(error:any)=>{
      alert("Usuario no valido")
    });

  }

}
