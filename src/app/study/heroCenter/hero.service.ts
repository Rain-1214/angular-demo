import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero, AjaxReturn } from './Hero';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HeroService {

    heroes: Hero[];

    constructor(
        private http: HttpClient
    ) {}

    getHeroes(): Observable<Hero[]> {
        if (!this.heroes) {
            return this.http.get('/test/getHeroes.do').map((res: AjaxReturn) => {
                if (res.stateCode) {
                    this.heroes = res.result;
                    return res.result as Hero[];
                }
            });
        }

        return Observable.of(this.heroes);
    }

    getHeroById(id: number): Observable<Hero> {
        if (!this.heroes) {
            return this.http.get('/test/getHeroes.do').map((res: AjaxReturn) => {
                if (res.stateCode) {
                    this.heroes = res.result;
                    return this.heroes.find(e => e.id === id);
                }
            });
        } else {
            return Observable.of(this.heroes.find(e => e.id === id));
        }
    }

}
