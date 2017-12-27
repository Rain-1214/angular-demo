import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroListRouterModule } from './hero-list-router.module';
import { HeroListComponent } from './hero-list.component';
import { HeroService } from './hero.service';
import { HeroTaxReturnComponent } from './heroTaxReturn/hero-tax-return.component';
import { HeroCompileComponent } from './heroCompile/hero-compile.component';

@NgModule({
    declarations: [
        HeroListComponent,
        HeroTaxReturnComponent,
        HeroCompileComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HeroListRouterModule
    ],
    exports: [],
    providers: [ HeroService ],
})
export class HeroListModule {}
