import { Component, OnInit } from '@angular/core';
import { MatchingService } from '../../services/matching.service';
import { ProductC } from '../../models/matching.model';
import { MessageService } from '../../services/message.service';
import { DataService } from '../../services/data.service';
import { RestService } from '../../services/rest.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  data: any;
  tempData: any;
  name = {
    name: ""
  };

  constructor(
    private matchingService: MatchingService,
    private messageService: MessageService,
    private http: DataService,
    private rest: RestService,
    private productc:  ProductC,
    private _location: Location
  ) { }

  ngOnInit() {
    console.log(this.matchingService.matchingProduct);
    this.data = this.matchingService.matchingProduct;
  }

  get flagLoading() {
    return this.rest.flagLoading
  }

  result(product) {
    product = product.product;
    if (this.matchingService.tempDataProductC) {
      this.matchingService.tempDataProductC = [];
    }
    this.http.get('http://10.21.3.29:8095/service1c/wares/?name=' + product).subscribe(x => {
        x.data.forEach(x => {
          this.productc = new ProductC;
          this.productc.name = x.name;
          this.productc.code = x.code;
          this.matchingService.tempDataProductC.push(this.productc);
          this.tempData = this.matchingService.tempDataProductC;
          return this.matchingService.tempDataProductC
        });
        console.log(this.matchingService.tempDataProductC);
      },
      error => {
        console.error('error')
      });
  }

  backClicked() {
    this._location.back();
  }

}
