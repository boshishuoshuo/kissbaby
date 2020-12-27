import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = new BehaviorSubject<Boolean>(null);

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email === 'test@test.com' && password === 'test123') {
      console.log('this is true');
      this.isLogin.next(true);
      return true;
    } else {
      console.log('this is false');

      this.isLogin.next(false);
      return false;
    }
  }

  logout() {
    this.isLogin.next(false);
    this.router.navigate(['/auth']);
  }

}
