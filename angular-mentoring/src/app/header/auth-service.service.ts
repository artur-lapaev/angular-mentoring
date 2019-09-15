import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  login(option) {
    localStorage.setItem('user', option);
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUserInfo(): boolean {
    return !!localStorage.getItem('user');
  }

  isAuthenticated(): boolean {
    const isAuthenticated = this.getUserInfo();
    return isAuthenticated;
  }

}
