import { Component } from '@angular/core';
import { AuthServiceService } from '../header/auth-service.service';

@Component({
  selector: 'am-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private authentification: AuthServiceService) { }

  userAuthentification(email, password) {

    const options = {
      userEmail: email,
      userPassword: password
    };

    const option = JSON.stringify(options);

    this.authentification.login(option);
  }

}
