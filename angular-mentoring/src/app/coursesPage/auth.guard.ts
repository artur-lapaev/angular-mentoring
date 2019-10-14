import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../header/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  Auth;
  constructor(private auth: AuthServiceService, private router: Router) { }
  canActivate(): boolean {
    this.auth.isAuthenticated().subscribe(isAuth => {
      this.Auth = isAuth;
    });
    if (this.Auth) {
      return this.Auth;
    }
    this.router.navigate(['/']);
    return this.Auth;
  }
}
