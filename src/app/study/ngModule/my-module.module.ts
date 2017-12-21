import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyModuleComponent } from './my-module.component';
import { ContactFormComponent } from './children/contact-form.component';
import { ContactListComponent } from './children/contact-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './route.module';

@NgModule({
  declarations: [
    MyModuleComponent,
    ContactFormComponent,
    ContactListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [ MyModuleComponent ],
  providers: [],
})
export class MyModuleModule {}
