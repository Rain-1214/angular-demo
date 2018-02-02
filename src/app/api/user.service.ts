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
        return this.http.post<AjaxReturn>('/api/user/checkUsername', { username });
    }

    getCode(email: string): Observable<AjaxReturn> {
        return this.http.post<AjaxReturn>('/api/user/getEmailCode', { email });
    }

    login(username: string, password: string) {
        return this.http.post<AjaxReturn>('/api/user/login', { username, password });
    }

    register(user: { username: string, password: string, email: string, code: string }) {
        return this.http.put<AjaxReturn>('/api/user/register', user);
    }

    forgetPassword(username: string) {
        return this.http.post<AjaxReturn>('/api/user/forgetPass', { username });
    }

    checkForgetPassCode(code: string) {
        return this.http.post<AjaxReturn>('/api/user/checkForgetPassCode', { code });
    }

    setNewPassword(password: string) {
        return this.http.post<AjaxReturn>('/api/user/setNewPass', { password });
    }
}
