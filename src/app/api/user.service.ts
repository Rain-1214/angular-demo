import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AjaxReturn } from '../entity/AjaxReturn';

@Injectable()
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    checkUsername(username: string): Observable<AjaxReturn> {
        return this.http.post<AjaxReturn>('/user/checkUsername', { username });
    }

    login(username: string, password: string): Observable<AjaxReturn> {
        return this.http.post<AjaxReturn>('/user/login', { username, password });
    }

}
