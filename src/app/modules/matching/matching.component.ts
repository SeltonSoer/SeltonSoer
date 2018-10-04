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

  result; // Переменная для получения чеков
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
    this.countWares();
    this.getCheck();
  }

  countWares() {
    // Получение кол-ва оставшихся товаров для сопоставления
    this.matchingService.getCountWares().subscribe(response => {
      if (response.count == 0) {
        this.messageService.openMessage('', 'Товаров для сопоставления больше нет')
      }
      else {
        this.matchingService.countWares = response.count;
        return this.matchingService.countWares
      }
    })
  }

  product(element) {
    // Получение уже сопоставленных товаров, если они есть
    this.checkout = true; // Включение спинера
    this.matchingService.matchingProduct = element;
    this.matchingService.getMatchingProduct(element[0]).subscribe(
      response => {
        if (response.name !== null) {
          this.matchingService.alreadyMatching = [];
          this.matchingService.alreadyMatching.push(response);
          this.next(element)
        }
        else if (response.name == null) {
          this.matchingService.alreadyMatching = [];
          this.next(element)
        }
      });
  }

  next(element) {
    // Нахождение похожих товаров с базы 1С
    this.matchingService.matchingProduct = element;
    this.matchingService.search(element[0]).subscribe(response => {
      if (response) {
        this.matchingService.tempDataProductC = response;
        this.router.navigate(['/product'], {relativeTo: this.route.root});
      }
    });
  }

  getCheck() {
    // Получение чеков
    this.matchingService.getChecks().subscribe((res) => {
      this.checks = [];
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
        this.product(this.checks);
      })
    })
  }
}
