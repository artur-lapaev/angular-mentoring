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

  getUserInfo() {

  }

  isAuthenticated(): boolean {
    const isAuthenticated = !!localStorage.getItem('user');
    return isAuthenticated;
  }

}
