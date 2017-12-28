import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent.component';

const routers: Routes = [
    {
        path: 'parent',
        component: ParentComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routers) ],
    exports: [ RouterModule ],
})
export class ParentRouterModule {}
