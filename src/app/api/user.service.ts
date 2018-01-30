import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { ParamMap } from '@angular/router/src/shared';

@Injectable()
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    checkUsername(username: string): Observable<boolean> {
        return this.http.post('/user/checkUsername', { username }).map((res: ParamMap) => {
            return res;
        });
    }

}
