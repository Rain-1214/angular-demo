import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from '../heroes/hero.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroDetailComponent } from '../heroes/hero-detail.component';
import { PropertyComponent } from '../study/property/property.component';
import { LifeComponent } from '../study/lifecycleHooks/life.component';
import { ComCmucaComponent } from '../study/componentCommunication/comCommunication.component';
import { AdComponent } from '../study/dynamicComponent/ad.component';
import { AttrDirComponent } from '../study/attributeDirective/attr-dir.component';
import { StruDirComponent } from '../study/structrualDirective/stru-dir.component';
import { PipeComponent } from '../study/pipes/pipes.component';
import { AnimationComponent } from '../study/animation/animation.component';
import { UserInputComponent } from '../study/userInput/user-input.component';
import { FormComponent } from '../study/forms/forms.component';
import { FormValidationComponent } from '../study/formvalidation/form-validation.component';
import { ReactiveFormComponent } from '../study/reactiveForm/reactive-form.component';
import { DynamicFormsComponent } from '../study/dynamicforms/dynamic-forms.component';
import { SlideComponent } from '../study/heroCenter/slide/slide.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'property',
    component: PropertyComponent
  },
  {
    path: 'life',
    component: LifeComponent
  },
  {
    path: 'communication',
    component: ComCmucaComponent
  },
  {
    path: 'dynamic',
    component: AdComponent
  },
  {
    path: 'attrDir',
    component: AttrDirComponent
  },
  {
    path: 'struDir',
    component: StruDirComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'animation',
    component: AnimationComponent
  },
  {
    path: 'userInput',
    component: UserInputComponent
  },
  {
    path: 'forms',
    component: FormComponent
  },
  {
    path: 'formsvalidation',
    component: FormValidationComponent
  },
  {
    path: 'reactiveform',
    component: ReactiveFormComponent
  },
  {
    path: 'dynamicform',
    component: DynamicFormsComponent
  },
  {
    path: 'heroCenter',
    loadChildren: 'app/study/heroCenter/hero.module#MyHeroModule'
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
    }
  ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
