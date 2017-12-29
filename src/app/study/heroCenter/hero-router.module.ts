import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';

const routes: Routes = [
    {
        path: 'heroCenter',
        redirectTo: 'heroCenter/heroList',
    },
    {
        path: 'heroCenter',
        component: HeroComponent,
        children: [
            {
                path: 'heroList',
                component: HeroListComponent
            },
            {
                path: 'heroDetail/:id',
                component: HeroDetailComponent
            },
            {
                path: 'cirsisList',
                component: CrisisCenterComponent
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class HeroRouterModule {}
