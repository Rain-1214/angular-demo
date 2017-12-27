import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list.component';

const routers: Routes = [
    {
        path: 'hierarchicalInject',
        component: HeroListComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routers) ],
    exports: [ RouterModule ],
})
export class HeroListRouterModule {}
