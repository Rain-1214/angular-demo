import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpComponent } from './http.component';
import { HttpRouterModule } from './http-router.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        HttpComponent
    ],
    imports: [
        CommonModule,
        HttpRouterModule,
        HttpModule,
        HttpClientModule,
    ],
    exports: [ HttpComponent ],
    providers: [],
})
export class MyHttpModule {}
