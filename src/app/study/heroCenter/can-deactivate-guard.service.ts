import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<CrisisDetailComponent> {

    canDeactivate(
        component: CrisisDetailComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {

        if (!component.crisis || component.tempName === component.crisis.name) {
            return true;
        }

        return component.dialogService.confirm('Discard Changes?');

    }

}
