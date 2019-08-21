import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './header/auth-service.service';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-mentoring';

  constructor(private router: Router, private authentification: AuthServiceService) {}

  ngOnInit() {
    const isAuth = this.authentification.isAuthenticated();

    if (isAuth) {
      this.router.navigate(['/courses']);
    } else {
      this.router.navigate(['/']);
    }

  }

}
