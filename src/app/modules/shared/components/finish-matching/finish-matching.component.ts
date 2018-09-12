import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-matching',
  templateUrl: './finish-matching.html',
  styleUrls: ['./finish-matching.component.scss']
})
export class FinishMatchingComponent {

  title: string = "";
  content: string = "";
  buttonNone: boolean = false;

  constructor(
    private router: Router,
  ) { }

  redir() {
    this.router.navigate(['matching'])
  }

}
