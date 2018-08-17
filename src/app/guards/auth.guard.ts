import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/";
import { LoginService } from '../services/login.service';
import { Injectable } from "@angular/core"

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
      private loginService: LoginService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
      let user = localStorage.getItem("user");
      if (user && !this.loginService.user) {
        this.loginService.setUser(user)
      }
      return !!user
    }
}
