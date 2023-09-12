import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit{

  /**
   *
   */
  constructor(public api: ApiService) {
    
  }
  pagina = "Profesores"

  mostrarProfesores(){
    this.api.Get('Profesors')
  }

  
  ngOnInit(): void {
    this.mostrarProfesores
  }
}
