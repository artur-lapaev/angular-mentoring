import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }

  login(option) {
    localStorage.setItem('user', option);
    this.router.navigate(['/courses']);
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  getUserInfo(): boolean {
    return !!localStorage.getItem('user');
  }

  isAuthenticated(): boolean {
    const isAuthenticated = this.getUserInfo();
    return isAuthenticated;
  }

}
