import { SpyDirective } from '../directive/mySpy.directive';
import { AdDirective } from '../directive/ad.directive';
import { HightLightDirective } from '../directive/hightLight.directive';
import { UnLessDirective } from '../directive/unless.directive';
import { ForBiddenDirective } from '../directive/forbidden.directive';

import { ExponentialStrengthPipe } from '../pipe/exponential-strength.pipe';
import { AxiosPipe } from '../pipe/axios.pipe';

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
import { AdHeroJobComponent } from '../study/dynamicComponent/adDetail/ad-hero-job.component';
import { AdHeroProfileComponent } from '../study/dynamicComponent/adDetail/ad-hero-profile.component';
import { AdComponent } from '../study/dynamicComponent/ad.component';
import { AttrDirComponent } from '../study/attributeDirective/attr-dir.component';
import { StruDirComponent } from '../study/structrualDirective/stru-dir.component';
import { PipeComponent } from '../study/pipes/pipes.component';
import { AnimationComponent } from '../study/animation/animation.component';
import { AnimationTwoComponent } from '../study/animation/children/animation-two.component';
import { UserInputComponent } from '../study/userInput/user-input.component';
import { FormComponent } from '../study/forms/forms.component';
import { FormValidationComponent } from '../study/formvalidation/form-validation.component';
import { ReactiveFormComponent } from '../study/reactiveForm/reactive-form.component';

const componentArray = [
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
  AdComponent,
  AdBannerComponent,
  AdHeroJobComponent,
  AdHeroProfileComponent,
  AttrDirComponent,
  StruDirComponent,
  PipeComponent,
  AnimationComponent,
  AnimationTwoComponent,
  UserInputComponent,
  FormComponent,
  FormValidationComponent,
  ReactiveFormComponent
];

const directiveArray = [
  SpyDirective,
  AdDirective,
  HightLightDirective,
  UnLessDirective,
  ForBiddenDirective
];

const pipeArray = [
  ExponentialStrengthPipe,
  AxiosPipe
];


export const declarationsArray = [
  ...componentArray,
  ...directiveArray,
  ...pipeArray
];
