import { Injectable } from '@angular/core';
import { Urls } from '../models/urls.models';
import { RestService } from './rest.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IUserChange, User } from '../models/user';
import "rxjs/add/operator/catch"

@Injectable()
export class LoginService {

  user: User;
  userChange: IUserChange;

  constructor(
    private http: RestService,
    private router: Router
  ) {}

  get flagLoading() {
    return this.http.flagLoading
  }

  seekUser(username, password): Observable<any> {
    return this.http.post(Urls.urlsAuthApi, {username, password}).map(
      (user) => {
        this.setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        return this.user;
      }
    );
  }

  setUser(user) {
    // Создаем юзера на основе полученых данных
    user = typeof user == "string"? JSON.parse(user): user;
    this.user = new User([
      user.fullname,
      user.token
    ], this.userChange);
  }

  logout() {
    this.user.clear();
    localStorage.clear();
    this.router.navigate(["/login"])
  }

}


