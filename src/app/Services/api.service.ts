import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public api: HttpClient) { }
  Url:"https://localhost:7065/api/"

  public async Get (controller:string){
    var respo:any
    await this.api.get(this.Url+controller).toPromise().then((res=>{
      respo = res
      console.log(respo);
    }))
  }
}
