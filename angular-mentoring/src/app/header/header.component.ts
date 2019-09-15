import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'am-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName = 'User Login';

  constructor(private authentification: AuthServiceService, private router: Router) { }

  logout() {
    this.authentification.logout();
    this.router.navigate(['/']);
  }

}
