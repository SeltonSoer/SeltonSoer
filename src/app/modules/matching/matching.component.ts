import { Component, OnInit } from '@angular/core'
import { MatchingService } from '../../services/matching.service';
import { Checks } from '../../models/matching.model';
import { LoginService } from '../../services/login.service';
import { MessageService } from '../../services/message.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss'],
})

export class MatchingComponent implements OnInit {

  oneProduct: Array<any> = []; // Массив для отборки по 1 товару
  result; // Переменная для получения чеков
  frontPage; // Следующая страница Api
  checks: Array<Checks>; // Чеки
  checkout: boolean; // Флаг спинера


  constructor(
    public matchingService: MatchingService,
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.matchingService.alreadyMatching = [];
    this.getNum();
  }

  product(element) {
    // Получение уже сопоставленных товаров, если они есть
    this.checkout = true; // Включение спинера
    this.matchingService.matchingProduct = element;
    this.matchingService.tempData = element;
    this.matchingService.getMatchingProduct(element).subscribe(
      response => {
        if (response.name !== null) {
          this.matchingService.alreadyMatching = [];
          this.matchingService.alreadyMatching.push(response);
          this.next(element)
        }
        else if(response.name == null) {
          this.matchingService.alreadyMatching = [];
          this.next(element)
        }
    });
  }

  next(element) {
    // Нахождение похожих товаров с базы 1С
    this.matchingService.search(element).subscribe(response => {
      this.matchingService.tempDataProductC = response;
      this.router.navigate(['product'], {relativeTo: this.route.root});
    });
  }

  getNum() {
    // Получение номеров уже сопоставленных товаров
    this.matchingService.filterNum = [];
    this.matchingService.getNumber().subscribe((res) =>{
        this.matchingService.filterNum.push(res);
        this.getCheckss();
      });
  }

  nextPage() {
    // Получаем следующую страницу Api
    this.matchingService.pageTemp = this.frontPage;
    console.log(this.matchingService.pageTemp);
    if (this.matchingService.pageTemp) {
      this.getCheckss()
    }
    else {
      this.checkout = false;
      this.messageService.openMessage('', 'Товаров для сопоставления больше нет')
    }
  }

  getCheckss() {
    // Получаем список товаров из чеков.
    this.checkout = true; // Включение спинера;
    this.matchingService.getChecks(this.matchingService.pageTemp).subscribe((res) => {
      this.checks = [];
      this.frontPage = res.next;
      res.results.forEach(check => {
        this.checks = this.checks.concat(check['wares'].map(ware => {
          this.result = new Checks();
          this.result.product = ware['name'];
          this.result.price = ware['price'];
          this.result.store = check['rival'];
          this.result.id = ware['id'];
          this.result.region = check['region'];
          return this.result;
        }));
      });
      // Фильтрация чеков с уже сопоставленными товарами
        this.matchingService.filterNum[0].forEach(y => {
          this.checks = this.checks.filter((x) => {
            return x.id != y.number;
          })
        });
      // Если на этой страницы товаров нет, переходим к следующей
      if (this.checks[0] == undefined) {
        this.nextPage()
      }
      else {
        this.oneProduct = [];
        this.oneProduct.push(this.checks[0]);
        this.product(this.checks[0]);
        this.checkout = false; // Выключение спинера
      }
    });
  }
}
