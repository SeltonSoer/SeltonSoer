import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {MatchingComponent} from '../../../matching/matching.component';
import {MatchingService} from '../../../../services/matching.service';

@Component({
  selector: 'app-result-win',
  templateUrl: './result-win.component.html',
  styleUrls: ['./result-win.component.css']
})
export class ResultWinComponent implements OnInit {

  tempData;
  buttonNone: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ResultWinComponent>,
    private matchingService: MatchingService
  ) {}

  ngOnInit() {
    this.tempData = this.matchingService.tempDataProductC
  }
}
