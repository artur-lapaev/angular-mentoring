import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../header/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuth;
  constructor(private auth: AuthServiceService, private router: Router) { }
  canActivate(): boolean {
    this.isAuth = this.auth.isAuthenticated();
    if (this.isAuth) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
