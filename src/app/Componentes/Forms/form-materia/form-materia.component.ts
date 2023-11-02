import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { MateriaModel } from 'src/app/Models/MateriaModel';
import { ApiService } from 'src/app/Services/api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form-materia',
  templateUrl: './form-materia.component.html',
  styleUrls: ['./form-materia.component.css']
})
export class FormMateriaComponent {
  DataMateria: MateriaModel ={
    nombreMateria:null,
    prueba:null
  }

  /**
   *
   */
  constructor(public api:ApiService) {
    
  }

  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    materia: [null, Validators.required],
    Prueba: [null, Validators.required]
  });

  onSubmit(): void {
    if (this.addressForm.valid) {
      this.DataMateria.nombreMateria = this.addressForm.controls['materia'].value,
      this.DataMateria.prueba = this.addressForm.controls['Prueba'].value,
      console.log(this.DataMateria)
      this.api.post('Materiums',this.DataMateria).then((res)=>{
              console.log(res),
              Swal.fire(
                'Registro completo',
                'Ya estás registrado en nuestro sistema...',
                'success'
              )
            }).catch((error)=>{
              //error promesa
              Swal.fire(
                'Alerta',
                error,
                'error'
              )
            })
      }
      else{
        //error validacion formulario
        Swal.fire(
          'ALERTA',
          'Por favor registre el formulario de manera correcta...',
          'error'
        )
      }
  }
}
