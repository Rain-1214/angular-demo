import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyTestComponent } from './myTest.component';
import { MyTestRouterModule } from './my-test.routing';
import { InputTestComponent } from './input-test/input-test.component';
import { ParamsComponent } from './params/params.component';

@NgModule({
  imports: [
    CommonModule,
    MyTestRouterModule
  ],
  declarations: [
    MyTestComponent,
    InputTestComponent,
    ParamsComponent
]
})
export class MyTestModule { }
