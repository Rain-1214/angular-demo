import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyModuleModule } from '../study/ngModule/my-module.module';
import { ProvidersModule } from '../study/providers/providers.module';

export const importsArray = [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  BrowserAnimationsModule,
  MyModuleModule,
  ProvidersModule
];
