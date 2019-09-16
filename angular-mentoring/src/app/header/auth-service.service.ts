import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  login(option) {
    localStorage.setItem('user', option);
  }

  logout() {
    const userString = localStorage.getItem('user');
    const user = JSON.parse(userString);
    localStorage.removeItem('user');
    return user;
  }

  getUserInfo() {
    return localStorage.getItem('user');
  }

  isAuthenticated(): boolean {
    const isAuthenticated = !!this.getUserInfo();
    return isAuthenticated;
  }

}
