import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatchingService } from '../../../../services/matching.service';

@Component({
  selector: 'app-matching-product',
  templateUrl: './matching-product.component.html',
  styleUrls: ['./matching-product.component.css']
})
export class MatchingProductComponent implements OnInit {

  product;
  buttonNone: boolean = false;

  constructor(
    private matchingService: MatchingService,
    public dialogRef: MatDialogRef<MatchingProductComponent>
  ) { }

  ngOnInit() {
    this.product = this.matchingService.tempData;
    console.log()
  }

}
