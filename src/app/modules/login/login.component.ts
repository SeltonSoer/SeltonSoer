import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    private router: Router
  ) { }

  user = {
    username: "",
    password: ""
  };

  login (user) {
    if (user.username && user.password) {
      this.loginService.seekUser(user.username, user.password).subscribe(
        () => {this.router.navigate(["/matching"])},
        e => console.error('error'))
    }
  }

  ngOnInit() {
    if (localStorage.getItem("user")) {
      this.router.navigate(["/matching"])
    }
  }

}
