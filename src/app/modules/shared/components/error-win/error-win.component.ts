import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-win',
  templateUrl: './error-win.component.html',
  styleUrls: ['./error-win.component.css']
})
export class ErrorWinComponent implements OnInit {

  title: string = "";
  content: string = "";
  buttonNone: boolean = false;

  constructor(
  ) { }

  ngOnInit() {
  }

}
