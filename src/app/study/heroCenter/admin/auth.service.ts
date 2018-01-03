import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AjaxReturn } from '../Hero';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthService {

  isLogin = false;
  redirect: string;


  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .post('/test/login.do', { username, password }).switchMap((res: AjaxReturn) => {
        if (res.stateCode) {
          return Observable.of(true).do(val => this.isLogin = true);
        } else {
          alert(res.message);
          return Observable.of(false);
        }
      });
  }

  logout(): void {
    this.isLogin = false;
  }

}
