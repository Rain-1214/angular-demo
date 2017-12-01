import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './router/app-routing.module';

import { InMemoryDataService } from './api/in-memory-data.module';
import { HeroService } from './heroes/shared/hero.service';
import { LoggerService } from './tool/logger/logger.Service';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero.component';
import { HeroDetailComponent } from './heroes/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './heroes/hero-search.component';
import { PropertyComponent } from './study/property/property.component';
import { PropertyEventComponent } from './study/property/children/property-event.component';
import { LifeComponent } from './study/lifecycleHooks/life.component';
import { LifeHeroComponent } from './study/lifecycleHooks/life-heroes/life-hero.component';

import { SpyDirective } from './directive/mySpy.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    PropertyComponent,
    PropertyEventComponent,
    LifeComponent,
    LifeHeroComponent,
    SpyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [
    HeroService,
    {
      provide: LoggerService,
      useFactory: () => {
        return new LoggerService(true);
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
