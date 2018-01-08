import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyModuleModule } from '../study/ngModule/my-module.module';
import { ProvidersModule } from '../study/providers/providers.module';
import { HeroListModule } from '../study/HierarchicalDependencyInjectors/hero-list.module';
import { ParentModule } from '../study/parent/parent.module';
import { MyHttpModule } from '../study/httpClient/http.module';
import { MyHeroModule } from '../study/heroCenter/hero.module';
import { MyTestModule } from '../study/myTest/myTest.module';

export const importsArray = [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  BrowserAnimationsModule,
  MyModuleModule,
  ProvidersModule,
  HeroListModule,
  ParentModule,
  MyHttpModule,
  MyHeroModule,
  MyTestModule
];
