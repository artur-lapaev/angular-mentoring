import { Component } from '@angular/core';
import { AuthServiceService } from '../header/auth-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Directionality } from '@angular/cdk/bidi';

@Component({
  selector: 'am-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  constructor(
    private authentification: AuthServiceService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  userAuthentification(email, password) {
    if (!!email && !!password) {
      const options = {
        userEmail: email,
        userPassword: password
      };

      const option = JSON.stringify(options);
      this.authentification.login(option);
      this.snackBar.open(`Wellcome ${options.userEmail}!!`, 'close', {
        duration: 2500,
        panelClass: ['login-valid'],
        verticalPosition: 'top'
      });
      this.router.navigate(['/courses']);
    } else {
      this.snackBar.open('Enter a email and password', 'close', {
        duration: 2500,
        panelClass: ['login-not-valid'],
        verticalPosition: 'top'
      });
    }
  }

}
