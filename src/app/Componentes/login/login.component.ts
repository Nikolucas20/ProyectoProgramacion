import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  /**
   *
   */
  constructor(public api: ApiService) {
    
  }
  pagina = "Login"

  mostrar(){
    this.api.Get('Logins')
  }

  
  ngOnInit(): void {
    this.mostrar
  }
}