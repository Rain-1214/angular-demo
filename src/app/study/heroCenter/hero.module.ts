import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroRouterModule } from './hero-router.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';
import { SlideComponent } from './slide/slide.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './admin/auth.service';
import { DialogService } from './dialog.service';
import { CanDeactivateGuardService } from './can-deactivate-guard.service';
import { CrisisDetailResolverService } from './crisis-center/crisis-detail-resolver.service';
import { CrisisService } from './crisis-center/crisis.service';
import { SelectivePreloadingStrategy } from './admin/dashboard/selective-preloading-strategy';
import { AuthguardService } from './admin/authguard.service';

@NgModule({
    declarations: [
        HeroComponent,
        HeroListComponent,
        HeroDetailComponent,
        CrisisCenterComponent,
        CrisisDetailComponent,
        SlideComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HeroRouterModule,
    ],
    exports: [
        HeroComponent
    ],
    providers: [
        HeroService,
        AuthService,
        DialogService,
        AuthguardService,
        CanDeactivateGuardService,
        CrisisService,
        CrisisDetailResolverService,
        SelectivePreloadingStrategy
    ],
})
export class MyHeroModule {}
