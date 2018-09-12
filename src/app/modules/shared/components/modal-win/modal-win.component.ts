import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-win',
  templateUrl: './modal-win.component.html',
  styleUrls: ['./modal-win.component.css']
})
export class ModalWinComponent implements OnInit {

  title: string = "";
  content: string = "";
  buttonNone: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
