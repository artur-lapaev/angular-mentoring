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
    let userName = localStorage.getItem('user');
    userName = JSON.parse(userName);
    localStorage.removeItem('user');
    return userName;
  }

  getUserInfo(): boolean {
    return !!localStorage.getItem('user');
  }

  isAuthenticated(): boolean {
    const isAuthenticated = this.getUserInfo();
    return isAuthenticated;
  }

}
