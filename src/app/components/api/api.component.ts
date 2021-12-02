import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {
  public users: any = '';
  constructor(public ApiService: ApiServiceService,
    private router: Router) {
  }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.ApiService.getAll();
  }
  edit(id: any) {
    this.ApiService.user = id;
    console.log(id);
    this.ApiService.editComponentActive = true;

  }
  del(id: any) {
    this.ApiService.del(id);
  }
  salir() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  register(){
    this.ApiService.registerComponentActive = true;
  }

}
