import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {

    preLoadingModels: string[];

    preload(route: Route, fn: () => Observable<any>): Observable<any> {

        if (route.data && route.data['preload']) {
            this.preLoadingModels.push(route.path);

            console.log(`PreLoad:${route.path}`);
            return fn();
        } else {
            return Observable.of(null);
        }

    }

}
