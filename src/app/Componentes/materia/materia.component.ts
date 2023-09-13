import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit{

  /**
   *
   */
  constructor(public api: ApiService) {
    
  }
  pagina = "Materia"

  mostrar(){
    this.api.Get('Materiums')
  }

  
  ngOnInit(): void {
    this.mostrar()
  }
}
