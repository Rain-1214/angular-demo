import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyModuleComponent } from './my-module.component';
import { ContactFormComponent } from './children/contact-form.component';
import { ContactListComponent } from './children/contact-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyModuleComponent,
    ContactFormComponent,
    ContactListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ MyModuleComponent ],
  providers: [],
})
export class MyModuleModule {}
