import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './children/login/login.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  }
];

export const UserRoutes = RouterModule.forChild(routes);
