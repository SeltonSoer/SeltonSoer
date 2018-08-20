import { Injectable } from '@angular/core';
import { Urls } from '../models/urls.models';
import { Observable } from "rxjs/Observable";
import { RestService } from './rest.service';


@Injectable()
export class MatchingService {

  tempDataProductC: Array<any> = [];
  tempData: Array<any>;

  get flagLoading() {
    return this.http.flagLoading
  }

  constructor (
    private http: RestService,
  ) {  }

  getChecks(): Observable<any> {
    return this.http.get(Urls.urlsChecks);
  }

}
