import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HttpComponent } from './http.component';
import { RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'http',
        component: HttpComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class HttpRouterModule {}
