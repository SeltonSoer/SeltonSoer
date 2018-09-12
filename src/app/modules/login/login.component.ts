import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { MessageService } from '../../services/message.service';
import { MatchingService } from '../../services/matching.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    username: "",
    password: ""
  };

  registrationInfo = {
    username: "",
    password: "",
    email: ""
  };

  constructor(
    public matchingService: MatchingService,
    public loginService: LoginService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("user")) {
      this.router.navigate(["/matching"])
    }
  }

  login (user) {
    console.log(user);
    let errorAuth = 'Ошибка авторизации';
    let errorPass = 'Введите пароль';
    let errorUser = 'Введите логин';
    if (user.password == '' && user.username == '') {
      this.messageService.errorMessage(errorAuth, 'Введите логин и пароль')
    }
    else if (user.username == '') {
      this.messageService.errorMessage(errorAuth, errorUser)
    }
    else if (user.password == '') {
      this.messageService.errorMessage(errorAuth, errorPass)
    }
    if (user.username && user.password) {
      this.loginService.seekUser(user.username, user.password).subscribe(
        () => {this.router.navigate(["/matching"])},
        e => {this.messageService.errorMessage(errorAuth, 'Нет такого пользователя или неверный пароль')})
    }
  }

  registration(registrationInfo) {
    if (registrationInfo.email == '') {
      console.error('error')
    }
    else if (!registrationInfo.email.match(/[\w\-]+[@][\w]+[.][\w]+/)) {
      this.messageService.openMessage(
        'Ошибка',
        'Неверный формат почты (example@samberi.com)',
        {height: '180px', width: '400px'}
      );
    }
    else {
      this.matchingService.registration(registrationInfo).subscribe(response => {
        if (response.user) {
          this.messageService.openMessage(
            'Ошибка регистрации',
            'Такой логин уже зарегистрирован',
            {height: '180px', width: '400px'}
          )
        }
        else if (response.email) {
          this.messageService.openMessage(
            'Ошибка регистрации',
            'Такой электронный адрес уже зарегистрирован',
            {height: '180px', width: '400px'}
          )
        }
        else {
          this.messageService.openMessage(
            '',
            'Регистрация успешно завершена'
          );
        }
      });
    }
  }
}
