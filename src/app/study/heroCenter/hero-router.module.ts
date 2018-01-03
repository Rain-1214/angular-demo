import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';
import { SlideComponent } from './slide/slide.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './admin/authguard.service';

const routes: Routes = [
    {
        path: '',
        component: HeroComponent
    },
    {
        path: 'heroCenter',
        component: HeroComponent,
        children: [
            {
                path: 'slide',
                component: SlideComponent,
                outlet: 'popup'
            },
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
            {
                path: 'admin',
                loadChildren: 'app/study/heroCenter/admin/admin.module#AdminModule',
                canActivate: [ AuthguardService ],
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class HeroRouterModule {}
