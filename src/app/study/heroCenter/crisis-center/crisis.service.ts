import { Injectable } from '@angular/core';
import { Crisis } from './crisis';
import { HttpClient } from '@angular/common/http';
import { AjaxReturn } from '../Hero';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrisisService {

    crises: Crisis[];

    constructor(
        private http: HttpClient
    ) {}

    getCrises(): Observable<Crisis[]> {
        if (!this.crises) {
            return this.http.get('/test/getCrisises.do').map((res: AjaxReturn) => {
                console.log(res);
                if (res.stateCode) {
                    this.crises = res.result;
                    return res.result as Crisis[];
                }
            });
        } else {
            return Observable.of(this.crises);
        }
    }

    getCrisesById(id: number): Observable<Crisis> {
        if (!this.crises) {
            return this.http.get('/test/getCrisises.do').map((res: AjaxReturn) => {
                if (res.stateCode) {
                    this.crises = res.result;
                    return this.crises.find(e => e.id === id);
                }
            });
        }

        return Observable.of(this.crises.find(e => e.id === id));
    }

    saveCrisis(id: number, newName: string): AjaxReturn {
        const currentCrisis = this.crises.find(e => e.id === id);
        currentCrisis.name = newName;
        return {
            stateCode: 1,
            message: 'success'
        };
    }

}
