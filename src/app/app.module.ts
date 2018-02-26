import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { RouterModule } from '@angular/router';
import { CheckAuthService } from './api/CheckAuth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutes,
  ],
  providers: [ CheckAuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
