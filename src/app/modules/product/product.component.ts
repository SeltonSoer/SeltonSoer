import { Component, OnInit, ViewChild} from '@angular/core';
import { MatchingService } from '../../services/matching.service';
import { ProductC } from '../../models/matching.model';
import { MessageService } from '../../services/message.service';
import { RestService } from '../../services/rest.service';
import { Location } from '@angular/common';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  sendData: Array<any> = []; // Для отправки товаров на сопоставление
  elementC: any; // Для отметки товара из 1С
  data: any;
  tempData: any; // Временные данные
  tableCheck: boolean; // Флаг для таблицы уже сопоставленных товаров

  displayedColumns: string[] = ['name', 'code', 'boole'];
  dataSource: MatTableDataSource<ProductC>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // Хранит данные формы
  name = {
    name: ''
  };

  constructor(
    public matchingService: MatchingService,
    private messageService: MessageService,
    private rest: RestService,
    private productc:  ProductC,
    private _location: Location,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    // Получаем сопоставляемый товар, товары из базы 1С
    this.matchingService.checkout = false;
    this.data = this.matchingService.matchingProduct;
    this.dataSource = new MatTableDataSource<ProductC>(this.matchingService.tempDataProductC);
    this.dataSource.paginator = this.paginator;
    // Флаг для отображения таблицы уже сопоставленных товаров
    if (this.matchingService.alreadyMatching == undefined) {
      this.router.navigate(['matching'])
    }
    else if (this.matchingService.alreadyMatching.length >= 1) {
      return this.tableCheck = true
    }
  }

  // Удаляет(пропускает) товар
  delete() {
    this.matchingService.checkout = true;
    this.matchingService.delete(this.matchingService.tempData);
  }

  get flagLoading() {
    return this.rest.flagLoading;
  }

  getProductByCodeOrName(data) {
    // Поиск товара по наименованию или по коду из 1С
    this.matchingService.search(data).subscribe(response => {
      this.matchingService.tempDataProductC = response;
      // Составление таблицы с пагинацией
      this.dataSource = new MatTableDataSource<ProductC>(this.matchingService.tempDataProductC);
      this.dataSource.paginator = this.paginator;
    })
  }

  // Отмеченный товар из 1С
  productC(element) {
    this.elementC = element;
  }

  matching() {
    // Сопоставление товара
    this.matchingService.checkout = true;
    this.sendData.push(this.elementC);
    this.sendData.push(this.matchingService.matchingProduct);
    this.matchingService.matchingProd(this.sendData).subscribe(response => {
      if (response) {
        this.matchingService.checkout = true;
        this.messageService.openMessage('', 'Сопоставление завершено');
      }
      this.matchingService.responseTemp = response;
      return this.matchingService.responseTemp
    });
  }

  logout() {
    this.loginService.logout();
  }

  // Получить отчет по сопоставлению
  getReport() {
    this.matchingService.report().subscribe(x => {
      this.messageService.openMessage(null, x.message, {height: '180px', width: '400px'})
    })
  }
}
