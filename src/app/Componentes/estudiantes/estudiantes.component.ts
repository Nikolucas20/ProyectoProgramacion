import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit{

  /**
   *
   */
  constructor(public api: ApiService) {}
  pagina = "Alumnos"

  mostrarAlumnos(){
    this.api.Get('Alumnos')
  }

  
  ngOnInit(): void {
    this.mostrarAlumnos
  }
}
