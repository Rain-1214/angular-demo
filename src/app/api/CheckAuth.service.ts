import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CheckAuthService implements CanLoad {

    isLogin = false;

    constructor(
        private router: Router
    ) { }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        console.log(this.isLogin);
        if (this.isLogin === true) {
            return true;
        }
        this.router.navigate(['/user/login']);
    }

}
