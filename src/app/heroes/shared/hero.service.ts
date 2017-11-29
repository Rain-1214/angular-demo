import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { heroes } from './mock-heroes';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ) {}

  getHeroesSlowly(id: number): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(heroes);
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(res => res.json() as Hero[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Hero)
      .catch(this.handleError);
  }

  updated(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), { headers: this.headers })
               .toPromise()
               .then(() => hero)
               .catch(this.handleError);
  }

  create(heroName: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({ name: heroName }), { headers: this.headers })
               .toPromise()
               .then((res) => res.json() as Hero[])
               .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
               .toPromise()
               .then(() => null)
               .catch(this.handleError);
  }

}
