import { Component } from '@angular/core';
import { AuthServiceService } from '../header/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'am-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  constructor(private authentification: AuthServiceService, private router: Router) { }

  userAuthentification(email, password) {

    const options = {
      userEmail: email,
      userPassword: password
    };

    const option = JSON.stringify(options);
    this.authentification.login(option);
    this.router.navigate(['/courses']);
  }

}
