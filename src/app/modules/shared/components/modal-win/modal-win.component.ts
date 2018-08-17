import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { MessageService } from '../../../../services/message.service';
import { DataService } from '../../../../services/data.service';
import { RestService } from '../../../../services/rest.service';
import { ProductC } from '../../../../models/matching.model';
import {MatchingService} from '../../../../services/matching.service';

@Component({
  selector: 'app-modal-win',
  templateUrl: './modal-win.component.html',
  styleUrls: ['./modal-win.component.css']
})
export class ModalWinComponent implements OnInit {

  buttonNone: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ModalWinComponent>,
    private messageService: MessageService,
    private http: DataService,
    private rest: RestService,
    private matchingService: MatchingService,
    private productc:  ProductC,
  ) { }

  get flagLoading() {
    return this.rest.flagLoading
  }

  name = {
    name: ""
  };

  ngOnInit() {

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
        return this.matchingService.tempDataProductC
      });
      console.log(this.matchingService.tempDataProductC);
      this.messageService.resultSearch();
    },
    error => {
      console.error('error')
    });
  }

}
