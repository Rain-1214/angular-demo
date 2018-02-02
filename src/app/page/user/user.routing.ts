import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './children/login/login.component';
import { RegisterComponent } from './children/register/register.component';
import { UserComponent } from './user.component';
import { ForgetPasswordComponent } from './children/forget-password/forget-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'forgetPassword',
        component: ForgetPasswordComponent
      },
    ]
  },
];

export const UserRoutes = RouterModule.forChild(routes);
