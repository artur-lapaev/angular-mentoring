import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  apiUrl = environment.apiUrl;
  isAuth: Observable<boolean>;
  userInfo = new Subject<any>();
  constructor(private http: HttpClient) { }

  login(email, pass) {
    const body = {
      login: email,
      password: pass
    };
    return this.http.post<any>(this.apiUrl + '/auth/login', body);
  }

  logout() {
    localStorage.removeItem('user');
  }

  getUserInfo() {
    return this.http.post<any>(this.apiUrl + '/auth/userinfo', null);
  }

  isAuthenticated(): boolean {
    const auth = localStorage.getItem('user');
    return !!auth;
  }

}
