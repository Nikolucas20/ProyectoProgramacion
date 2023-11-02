import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  Url="https://localhost:7065/api/"
  constructor(public api: HttpClient) { }
  
  public async Get (controller:string){
    var result:any
    var respo:any
    await this.api.get(this.Url+controller).toPromise().then((res=>{
      respo = res
      console.log(respo);
      result=respo;
    }))
    return result;
  }

  public async post(endpoint: String, body: any){
    var response;
    await this.api.post(this.Url+endpoint, body).toPromise().then((res =>{
      response = res;
    }))
    return response
  }
  
  public async delete(controller:string, id:string){
    var response;
    return await this.api.delete(this.Url+controller+"/"+id).toPromise().then((res =>{
      response = res;
    }))
    return response;
  }

  
  public async update(controller:string, id:string, body: any){
    return await this.api.put(this.Url+controller+"/"+id,body);
  }
}
