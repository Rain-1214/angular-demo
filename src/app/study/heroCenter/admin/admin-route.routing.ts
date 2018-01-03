import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageCrisisComponent } from './manageCrisis/manageCrisis.component';
import { ManageHeroComponent } from './manageHero/manageHero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardService } from './authguard.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: 'crisis',
            component: ManageCrisisComponent
          },
          {
            path: 'hero',
            component: ManageHeroComponent
          },
          {
            path: '',
            component: DashboardComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class AdminRouterModule {}
