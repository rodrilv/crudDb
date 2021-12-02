import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  response: any = "";
  constructor(public ApiService:ApiServiceService ) { }

  ngOnInit(): void {
  }
  closeEditComponent(){
    this.ApiService.editComponentActive = false;
  }
  edit(){
    this.ApiService.edit().then((result) =>{
      this.response = result;
      if(this.response.ok == true){
        Swal.fire({
          title: 'Actualización Exitosa',
          icon: 'success',
          timer: 2000
        });
      }else{
        Swal.fire({
          title: 'Algo salió mal...',
          icon: 'warning',
          timer: 2000
        });
      }
    })
  }
}