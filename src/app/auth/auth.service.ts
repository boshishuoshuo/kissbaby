import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = new BehaviorSubject<Boolean>(null);

  login(email: string, password: string) {
    if (email === 'test@test.com' && password === 'test123') {
      console.log('this is true');
      this.isLogin.next(true);
    } else {
      console.log('this is false');

      this.isLogin.next(false);
    }
  }

}
