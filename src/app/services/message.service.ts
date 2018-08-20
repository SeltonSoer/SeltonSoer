import { Injectable } from '@angular/core'

import { MatDialog } from '@angular/material'
import { ModalWinComponent } from  "../modules/shared/components/modal-win/modal-win.component"
import {ResultWinComponent} from '../modules/shared/components/result-win/result-win.component';
import {MatchingProductComponent} from '../modules/shared/components/matching-product/matching-product.component';
import {ErrorWinComponent} from '../modules/shared/components/error-win/error-win.component';


@Injectable()
export class MessageService {

  constructor(
    private dialog: MatDialog,
  ) {}

  openSearch(size:{height, width}=null) {
    let dialogRef = this.dialog.open(ModalWinComponent, {
      position: {top: '15.9%', left: '36.2%'}
    });
    dialogRef.componentInstance.buttonNone = true
  }

  resultSearch(size:{height, width}=null) {
    let dialogRef = this.dialog.open(ResultWinComponent, {
      height: size? size.height : '200px',
      width: size? size.width: '500px',
      position: {top: '15.7%', left: '35.7%'}
    });
    dialogRef.componentInstance.buttonNone = true;
  }

  matchingProduct(size:{height, width}=null) {
    let dialogRef = this.dialog.open(MatchingProductComponent, {
      position: {top: '0%', left: '35.7%'}
    });
    dialogRef.componentInstance.buttonNone = true
  }

  errorMessage(title, content, size:{height, width}=null) {
    let dialogRef = this.dialog.open(ErrorWinComponent, {
      height: size? size.height : '200px',
      width: size? size.width: '400px',
    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.content = content;
    dialogRef.componentInstance.buttonNone = true
  }

}
