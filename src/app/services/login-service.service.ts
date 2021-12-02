import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseDB: String = environment.baseURL;
  public logedUser: any;
  constructor(
    private http : HttpClient){
      this.logedUser = {
        ok:"",
        id: ""
      }

    }
  login(id: any, pass: any){
     return this.http.get(`${this.baseDB}obtener/${id}/${pass}`).toPromise(); 
  }
}
