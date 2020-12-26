import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { take, map } from "rxjs/operators";

import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot): boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable <boolean | UrlTree>{
      return this.authService.isLogin.pipe(
        take(1),
        map(res => {
          const isAuth = !!res;
          if (isAuth) {
            console.log("is authorized");
            return true;
          }
          console.log("is NOT authrozied")
          return this.router.createUrlTree(['/auth']);
        })
      )
      // return this.router.createUrlTree(['/auth']);
  }
}
