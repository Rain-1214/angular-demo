import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { StudentRoutes } from './student.routing';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from '../../common/header/header.component';
import { StudentService } from '../../api/student.service';
import { StudentWrapperComponent } from './children/student-wrapper/student-wrapper.component';
import { GradeSelectComponent } from './children/grade-select/grade-select.component';

@NgModule({
  imports: [
    SharedModule,
    StudentRoutes,
    NgZorroAntdModule.forRoot(),
  ],
  providers: [
    StudentService
  ],
  declarations: [
    StudentComponent,
    HeaderComponent,
    StudentWrapperComponent,
    GradeSelectComponent
  ]
})
export class StudentModule { }
