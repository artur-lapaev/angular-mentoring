import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { AmStore } from '../store/am-store';
import { logout } from '../store/actions/auth.action';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  apiUrl = environment.apiUrl;
  isAuth: Observable<boolean>;
  userInfo = new Subject<any>();
  constructor(private http: HttpClient, private store: Store<AmStore>) { }

  login(email, pass) {
    const body = {
      login: email,
      password: pass
    };
    return this.http.post<any>(this.apiUrl + '/auth/login', body);
  }

  logout() {
    this.store.dispatch(logout({ userToken: ''}));
  }

  getUserInfo() {
    return this.http.post<any>(this.apiUrl + '/auth/userinfo', null);
  }

  isAuthenticated(): Observable<boolean> {
    const auth = new BehaviorSubject<boolean>(false);
    this.store.subscribe(user => {
      auth.next(!!user.login.token);
    });
    return auth;
  }

}
