import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Crisis } from './crisis';
import { Observable } from 'rxjs/Observable';
import { CrisisService } from './crisis.service';

@Injectable()
export class CrisisDetailResolverService implements Resolve<Crisis> {

    constructor(
        private cs: CrisisService,
        private router: Router
    ) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Crisis | Observable<Crisis> | Promise<Crisis> {

        const id = +route.paramMap.get('id');

        return this.cs.getCrisesById(id).map(crisis => {
            if (crisis) {
                return crisis;
            } else {
                this.router.navigate(['/heroCenter/crisisList']);
                return null;
            }
        });
    }

}
