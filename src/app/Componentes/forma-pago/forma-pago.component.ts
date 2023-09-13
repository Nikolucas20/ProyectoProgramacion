import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.component.html',
  styleUrls: ['./forma-pago.component.css']
})
export class FormaPagoComponent implements OnInit{

  /**
   *
   */
  constructor(public api: ApiService) {
    
  }
  pagina = "Forma Pago"

  mostrar(){
    this.api.Get('FormaPagoes')
  }

  
  ngOnInit(): void {
    this.mostrar()
  }
}