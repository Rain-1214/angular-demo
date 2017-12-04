import { SpyDirective } from '../directive/mySpy.directive';
import { AdDirective } from '../directive/ad.directive';

import { HeroComponent } from '../heroes/hero.component';
import { HeroDetailComponent } from '../heroes/hero-detail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroSearchComponent } from '../heroes/hero-search.component';
import { PropertyComponent } from '../study/property/property.component';
import { PropertyEventComponent } from '../study/property/children/property-event.component';
import { LifeComponent } from '../study/lifecycleHooks/life.component';
import { LifeHeroComponent } from '../study/lifecycleHooks/life-heroes/life-hero.component';
import { ComCmucaComponent } from '../study/componentCommunication/comCommunication.component';
import { CmtHeroComponent } from '../study/componentCommunication/communicationHero/communication-hero.component';
import { CmtTimeComponent } from '../study/componentCommunication/communicationTime/communication-time.component';
import { AdBannerComponent } from '../study/dynamicComponent/ad-banner.component';

export const declarationsArray = [
  HeroComponent,
  HeroDetailComponent,
  DashboardComponent,
  HeroSearchComponent,
  PropertyComponent,
  PropertyEventComponent,
  LifeComponent,
  LifeHeroComponent,
  ComCmucaComponent,
  CmtHeroComponent,
  CmtTimeComponent,
  AdBannerComponent,
  SpyDirective,
  AdDirective
];