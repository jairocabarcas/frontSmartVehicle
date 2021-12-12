import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.model';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  datos:ModeloCliente={
    nombre:'',
    apellido:'',
    tipoDocumento:'',
    documento:'',
    fechaNacimiento:'',
    genero:'',
    correo:'',
    clave:'',
    celular:'',
    direccion:'',
    departamento:'',
    ciudad:''

  }

  tipos=[
      {
        valor:"",
        dato:"Tipo de documento"
      },
      {
        valor:"CC",
        dato: "Cedula de Ciudadania"
      },{
        valor:"CE",
        dato: "Cedula de Estranjería"
      }, {
        dato:"Pasaporte",
        valor:"Pasaporte"
      }
    
  ];
  generos=[
    {
      valor:"",
      dato:"Género"
    },
    {
      valor:"F",
      dato: "Femenino"
    },{
      valor:"M",
      dato: "Masculino"
    }, {
      dato:"otro",
      valor:"otro"
    }
  ]
  
 fgValidador: FormGroup = this.fb.group(
    {
      'nombre': ['',[Validators.required]],
      'apellido': ['',[Validators.required]],
      'tipoDocumento': ['',[Validators.required]],
      'documento': ['',[Validators.required]],
      'fechaNacimiento': ['',[Validators.required]],
      'genero': ['',[Validators.required]],
      'correo': ['',[Validators.required, Validators.email]],
      'clave': ['',[Validators.required]],
      'celular': ['',[Validators.required]],
      'direccion': ['',[Validators.required]],
      'departamento': ['',[Validators.required]],
      'ciudad': ['',[Validators.required]],
    }
  );
  
  constructor(
    private fb: FormBuilder, 
    private clienteService:ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  async registrarCliente(){

    let tipoDocumento = this.fgValidador.value['tipoDocumento'].value;
    
    let genero = this.fgValidador.value['genero'].value;

    
      let nombre = this.fgValidador.controls['nombre'].value;
      let apellido = this.fgValidador.controls['apellido'].value;
      
      let documento = this.fgValidador.controls['documento'].value;
      let fechaNacimiento = this.fgValidador.controls['fechaNacimiento'].value;
      
      let correo = this.fgValidador.controls['correo'].value;
      let clave = this.fgValidador.controls['clave'].value;
      let celular = this.fgValidador.controls['celular'].value;
      let direccion = this.fgValidador.controls['direccion'].value;
      let departamento = this.fgValidador.controls['departamento'].value;
      let ciudad = this.fgValidador.controls['ciudad'].value;
    

      this.clienteService.registrarCliente(this.datos).subscribe(
        ((datos:ModeloCliente)=>{
          alert("Datos regisrados con exito");
          this.router.navigate(['/inicio']);
        }),((error:any)=>{
          alert("No se pudo completar el registro")
        }));
      
  }
    


  }


