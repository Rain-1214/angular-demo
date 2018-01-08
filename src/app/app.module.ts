import { NgModule } from '@angular/core';

import { AppRoutingModule } from './router/app-routing.module';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './api/in-memory-data.module';

import { importsArray } from './imports/imports';
import { declarationsArray } from './imports/declarations';
import { AppComponent } from './app.component';

import { HeroService } from './heroes/shared/hero.service';
import { LoggerService } from './tool/logger/logger.Service';
import { AdHeroJobComponent } from './study/dynamicComponent/adDetail/ad-hero-job.component';
import { AdHeroProfileComponent } from './study/dynamicComponent/adDetail/ad-hero-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ...declarationsArray
  ],
  imports: [
    ...importsArray,
    AppRoutingModule,
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
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
