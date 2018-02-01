import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './children/login/login.component';
import { RegisterComponent } from './children/register/register.component';
import { UserComponent } from './user.component';

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
      }
    ]
  },
];

export const UserRoutes = RouterModule.forChild(routes);
