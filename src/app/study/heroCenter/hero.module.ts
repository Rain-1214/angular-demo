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

@NgModule({
    declarations: [
        HeroComponent,
        HeroListComponent,
        HeroDetailComponent,
        CrisisCenterComponent
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
