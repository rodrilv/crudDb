import { Component, Injectable, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
@Injectable({
  providedIn: "root"
})
export class LoginComponent implements OnInit {
  public inUser: any;
  private result: any;
  title = 'crudDb';
  constructor(
    private loginData: LoginServiceService,
    private router: Router,
    private Auth: AuthServiceService) {
    this.inUser = {
      id: '',
      pass: ''
    }
  }
  ngOnInit() {
    if(localStorage.getItem('status') == 'true'){
      this.Auth.authStatus = 'true';
      this.router.navigate(['/api']);

    }
  } 
  login() {
    this.loginData.login(this.inUser.id, this.inUser.pass).then((result) => {
      this.result = result
      Swal.fire({
        title: "Bienvenido!",
        timer: 2000,
        icon: "success"
      });
      this.loginData.logedUser.ok = this.result.ok;
      this.loginData.logedUser.id = this.result.usuario.loginID;
      this.loginData.logedUser.token = this.result.usuario.accessToken;
      console.log(this.loginData.logedUser);
      this.Auth.authStatus = 'true';
      localStorage.setItem('status', this.Auth.authStatus);
      this.router.navigate(['/api']);
    }
    ).catch((err) => {
      Swal.fire({
        title: "Intenta de nuevo",
        text: "Las credenciales son Incorrectas",
        timer: 2000,
        icon: "warning"
      });
    })
  }
}
