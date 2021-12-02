import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {
  public authStatus: any;
  constructor(private router: Router) {
    this.authStatus = 'false';
  }

  canActivate(): boolean {
    if(this.authStatus === 'false'){
      this.router.navigate(['']);
    return false;
    }else{
      return true;
    }
  }
}
