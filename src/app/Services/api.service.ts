import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Url:"https://localhost:7065/api/"
  constructor(public api: HttpClient) { }
  public async Get (controller:string){
    await this.api.get(this.Url+controller).toPromise().then((res=>{
      console.log(res);
    }))
  }
}
