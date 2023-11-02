import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from 'src/app/Models/LoginModel';
import { PersonaModel } from 'src/app/Models/PersonaModel';
import { ApiService } from 'src/app/Services/api.service';
import { MatInputModule } from '@angular/material/input';
import Swal from 'sweetalert2';
import { ProfesoresModel } from 'src/app/Models/ProfesoresModel';
import { EstudianteModel } from 'src/app/Models/EstudianteModel';



@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent {

  DataTutor: ProfesoresModel = {
    experiencia: null,
    idMateria: null,
    idPersona: null,
    idTipoUsuario: null
  }

  DataEstudiante: EstudianteModel = {
    tipoEducacion: null,
    idMateria: null,
    idPersona: null,
    idTipoUsuario: null
  }

  DataPersona: PersonaModel = {
    nombre:null,
    apellido:null,
    fechaNacimiento:null,
    tipoDocumento:null,
    numeroDocumento:null,
    celular:null,
    correo:null,
    direccion:null,
    idLogin:1,
    idTipoUsuario:null
  }

  DataLogin: LoginModel = {
    usuario:null,
    contraseña:null
  }

  constructor(public api:ApiService){ 
  }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    usuario:[null,Validators.compose([
      Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')])],
    password: [null, Validators.required],
    nombre: [null,Validators.required],
    apellido:[null,Validators.required],
    fechaNacimiento: [null,Validators.compose([
      Validators.required])],
    tipoDocumento: [null,Validators.compose([
      Validators.required
    ])],
    numeroDocumento: [null,Validators.compose([
      Validators.required,Validators.pattern('^[0-9]+$')
    ])],
    celular: [null,Validators.compose([
      Validators.required,Validators.pattern('^[0-9]+$')
    ])],
    correo: [null,Validators.compose([
      Validators.required,Validators.email
    ])],
    direccion: [null,Validators.compose([
      Validators.required
    ])],
    tipoUsuario: [null,Validators.compose([
      Validators.required,Validators.pattern('^[1-2]+$')
    ])],
    experiencia: [null],
    tipoEducacion: [null],
    materia: [null, Validators.required]
  });

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.DataLogin.usuario = this.addressForm.controls['usuario'].value,
      this.DataLogin.contraseña = this.addressForm.controls['password'].value
          console.log(this.DataLogin);
          //enviar datos a post de clientes
          this.api.post('Logins',this.DataLogin).then((res)=>{
            console.log(res), 
            this.DataPersona.nombre = this.addressForm.controls['nombre'].value,
            this.DataPersona.apellido = this.addressForm.controls['apellido'].value,
            this.DataPersona.fechaNacimiento = this.addressForm.controls['fechaNacimiento'].value,
            this.DataPersona.tipoDocumento = this.addressForm.controls['tipoDocumento'].value,
            this.DataPersona.numeroDocumento = this.addressForm.controls['numeroDocumento'].value,
            this.DataPersona.celular = this.addressForm.controls['celular'].value,
            this.DataPersona.correo = this.addressForm.controls['correo'].value,
            this.DataPersona.direccion = this.addressForm.controls['direccion'].value,
            this.DataPersona.idLogin = res.idLogin,
            this.DataPersona.idTipoUsuario = this.addressForm.controls['tipoUsuario'].value,
            
            console.log(this.DataPersona)
            //cuando se instancia, enviar personal al metodo post de personas
            this.api.post('Personas',this.DataPersona).then((res)=>{
                console.log(res)
                if(this.addressForm.controls['tipoUsuario'].value == 1){
                      this.DataEstudiante.tipoEducacion = this.addressForm.controls['tipoEducacion'].value,
                      this.DataEstudiante.idMateria= this.addressForm.controls['materia'].value,
                      this.DataEstudiante.idPersona= res.idPersona,
                      this.DataEstudiante.idTipoUsuario= this.addressForm.controls['tipoUsuario'].value,
            
                      this.api.post('Alumnos',this.DataEstudiante).then((res)=>{
                        console.log(res),
                        Swal.fire(
                          'Registro completo',
                          'Ya estás registrado en nuestro sistema...',
                          'success'
                        )
                      }).catch((error)=>{
                        //error promesa cliente
                        Swal.fire(
                          'Alerta',
                          error,
                          'error'
                        )
                      })
                }
                else{
                  this.DataTutor.experiencia = this.addressForm.controls['experiencia'].value,
                  this.DataTutor.idMateria= this.addressForm.controls['materia'].value,
                  this.DataTutor.idPersona= res.idPersona,
                  this.DataTutor.idTipoUsuario= this.addressForm.controls['tipoUsuario'].value,
                  this.api.post('Profesors',this.DataTutor).then((res)=>{
                    console.log(res),
                    Swal.fire(
                      'Registro completo',
                      'Ya estás registrado en nuestro sistema...',
                      'success'
                    )
                  }).catch((error)=>{
                    //error promesa cliente
                    Swal.fire(
                      'Alerta',
                      error,
                      'error'
                    )
                  })
                }
          }).catch((error)=>{
            //error promesa cliente
            Swal.fire(
              'Alerta',
              error,
              'error'
            )
          })
      }).catch((error)=>{
        //error promesa persona
        Swal.fire(
          'Alerta',
          error,
          'error'
        )
      })
    }else{
      Swal.fire(
        'ALERTA',
        'Por favor registre el formulario de manera correcta...',
        'error'
      )
    }
  }
}
