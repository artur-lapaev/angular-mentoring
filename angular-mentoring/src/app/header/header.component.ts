import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'am-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userName = 'User Login';

  constructor(
    private authentification: AuthServiceService,
    private router: Router,
    private snackBar: MatSnackBar) { }

  logout() {
    const user = this.authentification.logout();
    this.snackBar.open(`Bye ${user.userEmail}!!`, 'close', {
      verticalPosition: 'top',
      duration: 2500
    });
    this.router.navigate(['/']);
  }

}
