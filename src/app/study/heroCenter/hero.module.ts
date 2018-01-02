import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { FormsModule } from '@angular/forms';
import { HeroRouterModule } from './hero-router.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroService } from './hero.service';
import { HttpClientModule } from '@angular/common/http';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { CrisisCenterComponent } from './crisis-center/crisis-center.component';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';
import { SlideComponent } from './slide/slide.component';
import { TestComponent } from './Test/Test.component';

@NgModule({
    declarations: [
        HeroComponent,
        HeroListComponent,
        HeroDetailComponent,
        CrisisCenterComponent,
        CrisisDetailComponent,
        SlideComponent,
        TestComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        HeroRouterModule
    ],
    exports: [
        HeroComponent
    ],
    providers: [ HeroService ],
})
export class MyHeroModule {}
