import { Injectable } from '@angular/core';
import { Urls } from '../models/urls.models';
import { Observable } from "rxjs/Observable";
import { RestService } from './rest.service';
import { Router } from '@angular/router';
import { MessageService } from './message.service';
import { LoginService } from './login.service';
import { Http } from '@angular/http';


@Injectable()
export class MatchingService {

  tempDataProductC: Array<any> = []; // Товары из 1С
  tempData: Array<any>; // Временные товары
  matchingProduct: Array<any>; // Для сопоставления товаров
  responseTemp: any;
  alreadyMatching: Array<any>; // Уже сопоставленные товары
  pageTemp; // Переменная страниц Api
  filterNum: Array<any> = []; // Для фильтрации
  checkout = false; // Спинер
  countWares: number;


  constructor (
    private router: Router,
    private http: RestService,
    private messageService: MessageService,
    private loginService: LoginService
  ) {  }

  // Получить чеки
  getChecks(url): Observable<any> {
    if (url == undefined) {
      url = '/api/ofd/checks'
    }
    return this.http.get(url);
  }

  // Получить числа для фильтрации товаров
  getNumber(): Observable<any> {
    return this.http.get(Urls.urlsNumber)
  }

  // Кол-во оставшихся товаров для сопоставления
  getCountWares(): Observable<any> {
    return this.http.get(Urls.urlsCountWares)
  }

  // Поиск товаров из 1С
  search(data): Observable<any> {
    return this.http.post(Urls.urlsSearch, data)
  }

  // Сопоставить товары
  matchingProd(data): Observable<any> {
    return this.http.post(Urls.urlsMatching, data)
  }

  // Получить уже сопоставленные товары
  getMatchingProduct(data): Observable<any> {
    return this.http.post(Urls.urlsAlready, data)
  }

  // Удалить (пропустить) товар
  del(data) {
    this.http.post(Urls.urlsDelete, data).subscribe((x) => {
      console.log(x);
      this.router.navigate(['login'])
    });
  }

  // Отправка отчета
  report(): Observable<any> {
    return this.http.post(Urls.urlsReport, {user: this.loginService.user})
  }

  // Регистрация пользователя
  registration(data): Observable<any> {
    return this.http.post(Urls.urlsRegistration, data)
  }

  // Удалить (пропустить) товар
  delete(checked) {
    let answer = "Вы уверены, что хотите пропустить товар?";
    let _title =  'Подтвердите действие';
    this.messageService.openDialog(_title, answer, y => {
      this.del(checked)
    },
      () => {
        this.checkout = false
      }
    );
  }
}
