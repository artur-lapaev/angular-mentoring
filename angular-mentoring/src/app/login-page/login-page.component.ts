import { Component } from '@angular/core';
import { AuthServiceService } from '../header/auth-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { User } from '../header/user';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'am-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {
  user: User;
  constructor(
    private authentification: AuthServiceService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  userAuthentification(email, password) {
    if (!!email && !!password) {
      this.authentification.login(email, password).subscribe(data => {
        localStorage.setItem('user', data.token);
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
  }
  getUser() {
    return this.user;
  }
}
