import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'am-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authentification: AuthServiceService) { }

  logout() {
    return this.authentification.logout();
  }


}
