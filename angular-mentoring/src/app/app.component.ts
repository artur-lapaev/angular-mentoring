import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'am-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angular-mentoring';

  constructor(private router: Router) {}

  ngOnInit() {
    const isUser = localStorage.getItem('user');

    if (isUser) {
      this.router.navigate(['/courses']);
    }
  }

}
