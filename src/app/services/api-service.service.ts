import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  public users: any = '';
  public user: any = '';
  private baseURL: String = environment.baseURL;
  editComponentActive = false;
  registerComponentActive = false;
  constructor(
    private http: HttpClient
  ) { }
  async register(user: any){
    Swal.fire({title: 'Registrando...',timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      }});
      try{
      let subject: any = await this.http.post(`${this.baseURL}registrar`, user).toPromise();
    if(subject.ok == true){
      this.closeSwal(subject.ok);
      Swal.fire({title: 'Registrado Exitosamente!',icon: 'success',confirmButtonColor:'green'});
    }else{
      Swal.fire({title: 'Hubo un error durante la operación...',icon: 'warning',confirmButtonColor:'green'});
    }  
    this.getAll();
  }catch(err){
    Swal.fire({title: 'Hubo un error durante la operación...',icon: 'warning',confirmButtonColor:'green'});
  }
  }
  getAll() {
    return this.http.get(`${this.baseURL}obtener`).toPromise().then((result: any) => {
      this.users = result
    }).catch((err) => {
      this.users = null;
    });
  }
  edit() {
    return this.http.put(`${this.baseURL}actualizar/${this.user._id}`, this.user).toPromise();
  }
  closeSwal(stat: boolean){
    if(stat == true){Swal.close();}else{Swal.close();}
  }
  async del(id: any) {
    Swal.fire({title: 'Eliminando',timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      }});
    let del: any = await this.http.delete(`${this.baseURL}eliminar/${id}`).toPromise();
    if(del.ok == true){
      this.closeSwal(del.ok);
      Swal.fire({title: 'Eliminado Exitosamente!',icon: 'success',confirmButtonColor:'green'});
    }else{
      Swal.fire({title: 'Hubo un error durante la operación...',icon: 'warning',confirmButtonColor:'green'});
    }  
    this.getAll();
    console.log(del)
    return del;
  }
}
