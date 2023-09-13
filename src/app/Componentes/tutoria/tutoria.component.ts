import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-tutoria',
  templateUrl: './tutoria.component.html',
  styleUrls: ['./tutoria.component.css']
})
export class TutoriaComponent implements OnInit{

  /**
   *
   */
  constructor(public api: ApiService) {
    
  }
  pagina = "Tutoria"

  mostrarTutoria(){
    this.api.Get('ReservaTutoriums')
  }

  
  ngOnInit(): void {
    this.mostrarTutoria()
  }
}
