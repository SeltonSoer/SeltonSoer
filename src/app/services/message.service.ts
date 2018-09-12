import { Injectable } from '@angular/core'
import { MatDialog } from '@angular/material'
import { ErrorWinComponent } from '../modules/shared/components/error-win/error-win.component';
import { FinishMatchingComponent } from '../modules/shared/components/finish-matching/finish-matching.component';
import { ModalWinComponent } from '../modules/shared/components/modal-win/modal-win.component';


@Injectable()
export class MessageService {

  constructor(
    private dialog: MatDialog,
  ) {}

  errorMessage(title, content, size:{height, width}=null) {
    let dialogRef = this.dialog.open(ErrorWinComponent, {
      height: size? size.height : '150px',
      width: size? size.width: '400px',
    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.content = content;
    dialogRef.componentInstance.buttonNone = true
  }

  openMessage(title, content, size: {height, width}=null) {
    let dialogRef = this.dialog.open(FinishMatchingComponent, {
      height: size? size.height : '150px',
      width: size? size.width: '400px',
    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.content = content;
    dialogRef.componentInstance.buttonNone = true
  }

  openDialog(title, content, callbackY: Function=null, callbackN: Function=null, size: {height, width}=null) {
    let dialogRef = this.dialog.open(ModalWinComponent, {
      height: size? size.height : '150',
      width: size? size.width: '400px',
    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.content = content;
    dialogRef.afterClosed().subscribe(answer => {
      if(answer && callbackY) {
        callbackY();
      }
      if (!answer && callbackN) {
        callbackN()
      }
    })
  }

}
