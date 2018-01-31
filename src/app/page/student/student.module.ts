import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { StudentRoutes } from './student.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    StudentRoutes,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [StudentComponent]
})
export class StudentModule { }
