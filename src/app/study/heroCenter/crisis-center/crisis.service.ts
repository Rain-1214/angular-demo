import { Injectable } from '@angular/core';
import { Observable } from '../../../../../node_modules/_rxjs@5.5.5@rxjs/Observable';
import { Crisis } from './crisis';
import { HttpClient } from '@angular/common/http';
import { AjaxReturn } from '../Hero';

import 'rxjs/add/Observable/of';


@Injectable()
export class CrisisService {

    crisis: Crisis[];

    constructor(
        private http: HttpClient
    ) {}

    getCrisises(): Observable<Crisis[] | void> {
        if (!this.crisis) {
            this.http.get('/text/getCrisises').map((res: AjaxReturn) => {
                if (res.stateCode) {
                    this.crisis = res.result;
                    return res.result as Crisis[];
                }
            });
        }

        return Observable.of(this.crisis);
    }

    getCrisisesById(id: number): Observable<Crisis> {
        if (!this.crisis) {
            this.http.get('/text/getCrisises').map((res: AjaxReturn) => {
                if (res.stateCode) {
                    this.crisis = res.result;
                    return this.crisis.find(e => e.id === id);
                }
            });
        }

        return Observable.of(this.crisis.find(e => e.id === id));
    }

}
