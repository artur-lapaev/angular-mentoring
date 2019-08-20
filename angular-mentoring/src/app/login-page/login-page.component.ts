import { Component } from '@angular/core';

@Component({
  selector: 'am-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor() { }

  userAuthentification(email, password) {

    const options = {
      userEmail: email,
      userPassword: password
    };

    const option = JSON.stringify(options);

    localStorage.setItem('user', option);
  }

}
