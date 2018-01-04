import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
    Router, CanActivateChild, NavigationExtras, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthguardService implements CanActivate, CanActivateChild, CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const url = state.url;
        console.log(url);
        return this.checkLogin(url);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {

        const url = `/${route.path}`;

        return this.checkLogin(url);

    }

    checkLogin(url: string): boolean {
        if (this.authService.isLogin) {
            return true;
        }

        const session_id = 123456;

        const navigationExtras: NavigationExtras = {
            queryParams: { 'session_id': session_id },
            fragment: 'anchor'
        };

        this.authService.redirect = url;
        this.router.navigate(['/heroCenter/login'], navigationExtras);
        return false;

    }


}
