import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApiComponent } from './components/api/api.component';
import { LoginComponent } from './components/login/login/login.component';
import { AuthServiceService } from './services/auth-service.service';

const routes: Routes = [
  {
    path: "api",
    component: ApiComponent,
    canActivate: [AuthServiceService]
  },
  {
    path:"",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
