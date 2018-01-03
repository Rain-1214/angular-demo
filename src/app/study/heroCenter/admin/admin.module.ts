import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRouterModule } from './admin-route.routing';
import { ManageCrisisComponent } from './manageCrisis/manageCrisis.component';
import { ManageHeroComponent } from './manageHero/manageHero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { AuthguardService } from './authguard.service';


@NgModule({
  declarations: [
    AdminComponent,
    ManageCrisisComponent,
    ManageHeroComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRouterModule,
  ],
  exports: [ AdminComponent ],
  providers: [ AuthguardService ]
})
export class AdminModule {}
