import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthServiceService } from '../header/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthServiceService, private router: Router) { }
  canActivate(): boolean {
    const isAuth = this.auth.isAuthenticated();
    if (isAuth) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
