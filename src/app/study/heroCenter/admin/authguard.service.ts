import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthguardService implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const url = state.url;
        console.log(url);
        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        if (this.authService.isLogin) {
            return true;
        }

        this.authService.redirect = url;
        this.router.navigate(['/heroCenter/login']);
        return false;

    }


}
