import { Component, OnInit, ViewChild } from '@angular/core'
import { MatchingService } from '../../services/matching.service';
import { Checks } from '../../models/matching.model';
import { LoginService } from '../../services/login.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MessageService } from '../../services/message.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss'],
})

export class MatchingComponent implements OnInit {

  checks: Array<Checks>;
  result;
  displayedColumns: string[] = ['product', 'price', 'store', 'region'];
  dataSource: MatTableDataSource<Checks>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private serviceChecks: MatchingService,
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.serviceChecks.getChecks().subscribe((res) => {
      this.checks = [];
      res.forEach(check => {
        this.checks = this.checks.concat(check['wares'].map(ware => {
          this.result = new Checks();
          this.result.product = ware['name'];
          this.result.price = ware['price'];
          this.result.store = check['rival'];
          this.result.id = ware['id'];
          this.result.region = check['region'];
          return this.result;
        }));
      });
      console.log(this.checks);
      this.dataSource = new MatTableDataSource<Checks>(this.checks);
      this.dataSource.paginator = this.paginator;
    });
  }

  logout() {
    this.loginService.logout();
  }

  product(element) {
    this.router.navigate(['product'], {relativeTo: this.route.root});
    this.serviceChecks.matchingProduct = element;
    this.serviceChecks.tempData = element;
  }
}