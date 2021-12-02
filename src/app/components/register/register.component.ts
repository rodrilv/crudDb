import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    user = {
    _id: null,
    Nombre: null,
    Edad: null,
    Ocupacion: null,
    Genero: null,
    Pass: null
  }
  constructor(private ApiService: ApiServiceService) { }

  ngOnInit(): void {
  }
  register(user: any){
    this.ApiService.register(user);
  }
  closeRegisterComponent(){
    this.ApiService.registerComponentActive = false;
  }


}
