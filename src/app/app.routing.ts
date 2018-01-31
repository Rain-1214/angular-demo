import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: 'app/page/user/user.module#UserModule'
  },
  {
    path: 'student',
    loadChildren: 'app/page/student/student.module#StudentModule'
  },
  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/user'
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
