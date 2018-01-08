import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router/src/config';
import { MyTestComponent } from './myTest.component';
import { ParamsComponent } from './params/params.component';

const routes: Routes = [
    {
        path: 'myTest',
        component: MyTestComponent
    },
    {
        path: 'routerTest/:id',
        component: ParamsComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class MyTestRouterModule {}
