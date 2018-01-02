import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';
import { SlideComponent } from './slide/slide.component';
import { TestComponent } from './Test/Test.component';

const routes: Routes = [
    {
        path: 'slide',
        component: SlideComponent,
        outlet: 'popup'
    },
    {
        path: 'test',
        component: TestComponent,
        outlet: 'popup'
    },
    {
        path: '',
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
                path: 'crisisList',
                component: CrisisCenterComponent,
                children: [
                    {
                        path: 'crisisDetail/:id',
                        component: CrisisDetailComponent
                    }
                ]
            },
        ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class HeroRouterModule {}
