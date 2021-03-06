import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './children/login/login.component';
import { UserService } from '../../api/user.service';
import { UserRoutes } from './user.routing';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RegisterComponent } from './children/register/register.component';
import { UserComponent } from './user.component';
import { ForgetPasswordComponent } from './children/forget-password/forget-password.component';
import { CheckAuthService } from '../../api/CheckAuth.service';

@NgModule({
  imports: [
    SharedModule,
    UserRoutes,
    NgZorroAntdModule.forRoot(),
  ],
  providers: [
    UserService,
  ],
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
  ]
})
export class UserModule { }
