import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'am-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName = 'User Login';

  constructor(
    private authentification: AuthServiceService,
    private router: Router,
    private snackBar: MatSnackBar,
    private changeDetection: ChangeDetectorRef,
    public translate: TranslateService) {
    const browserLang = translate.getBrowserLang();
    if (browserLang === 'ru') {
      translate.addLangs(['ru', 'en']);
    } else {
      translate.addLangs(['en', 'ru']);
    }
    translate.setDefaultLang('en');

    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }
  ngOnInit() {
    this.authentification.userInfo.subscribe(user => {
      this.userName = `${user.name.first}  ${user.name.last}`;
    });
  }
  logout() {
    this.authentification.logout();
    this.snackBar.open(`Bye ${this.userName}!!`, 'close', {
      verticalPosition: 'top',
      duration: 2500
    });
    this.userName = 'User Login';
    this.router.navigate(['/']);
  }

}
