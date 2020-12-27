import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = false;
  isAuth: Boolean;

  private isLogin: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLogin = this.authService.isLogin.subscribe( isAuthorized =>
      {this.isAuth = isAuthorized;
        console.log(this.isAuth) });
    console.log(this.isAuth);
  }

  onLogout() {
    this.authService.logout();
  }

}
