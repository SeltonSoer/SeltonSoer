import { Injectable } from '@angular/core';
import { Http, Jsonp, Response, Headers, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable"
import 'rxjs/add/operator/map'
import "rxjs/add/operator/catch"
import "rxjs/add/operator/finally"
import "rxjs/add/observable/throw"


@Injectable()
export class RestService {

  private _token: string;

  public flagLoading = false;


  constructor(
    private http: Http,
    private _jsonp: Jsonp
  ) {}

  setAuthorizationHeader(token) {
    this._token = "Token " + token
  }

  getHeaders(headers={}): Headers {
    let _headers = new Headers();
    Object.entries(headers).forEach((k, v) => {
      _headers.append(k.toString(), v.toString());
    });
    return _headers;
  }

  get(url, data = {}, headers={}): Observable<any> {
    if (Object.keys(data).length) {
      url = url + "?" + Object.entries(data).map(([k, v]) => {return `${k}=${v}`}).join(";")
    }
    this.flagLoading = true;
    return this.http.get(encodeURI(url), new RequestOptions({headers: this.getHeaders(headers)}))
      .map(this.mapper)
      .catch(this.handleError)
      .finally(()=>this.flagLoading = false)
  }

  post(url, body={}, headers={}):Observable<any> {
    this.flagLoading = true;
    return this.http.post(
      encodeURI(url),
      body,
      new RequestOptions({headers: this.getHeaders(headers)})
    )
      .map(this.mapper)
      .catch(this.handleError)
      .finally(()=>this.flagLoading = false);
  }

  jsonp(url):Observable<any>{
    this.flagLoading = true;
    return this._jsonp.request(url)
      .map(this.mapper)
      .catch(this.handleError)
      .finally(()=>this.flagLoading = false)
  }

  private handleError(error): Observable<any> {
    return Observable.throw(error.message || error)
  }

  private mapper(res: Response): any {
    const body: any = res.json();
    return body || {}
  }

}
