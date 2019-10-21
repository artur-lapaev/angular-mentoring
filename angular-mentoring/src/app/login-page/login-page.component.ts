import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../header/auth-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { User } from '../header/user';
import { Store, select } from '@ngrx/store';
import { login } from '../store/actions/auth.action';
import { AmStore } from '../store/am-store';
import { selectLoginToken } from '../store/selectors/selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'am-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})

export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  user: User;
  disabled: boolean;
  value: string;

  constructor(
    private formBuilder: FormBuilder,
    private authentification: AuthServiceService,
    private router: Router,
    private snackBar: MatSnackBar,
    private store: Store<AmStore>) {
    this.store.pipe(select(selectLoginToken));
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }

  userAuthentification(email, password) {
    this.authentification.login(email, password).subscribe(userToken => {

      this.store.dispatch(login({ userToken: userToken.token }));
      this.authentification.getUserInfo().subscribe(user => {
        this.user = user;
        this.authentification.userInfo.next(user);
        this.snackBar.open(`Wellcome ${this.user.name.first} ${this.user.name.last}!!`, 'close', {
          duration: 2500,
          panelClass: ['login-valid'],
          verticalPosition: 'top'
        });
        this.router.navigate(['/courses']);
      });
    });
  }
  getUser() {
    return this.user;
  }
}
