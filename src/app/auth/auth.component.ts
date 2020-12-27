import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isAuth: boolean;
  errMessage: string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    this.isAuth = this.authService.login(form.value.email, form.value.password);
    // console.log(form.value.email);
    // console.log(form.value.password);
    if (this.isAuth) {
      this.router.navigate(['/sales']);
    } else {
      this.errMessage = 'Please use test@test.com and test123 to login';
    }
  }

}
