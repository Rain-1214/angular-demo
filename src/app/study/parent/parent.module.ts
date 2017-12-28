import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ParentRouterModule } from './parent-router.module';
import { ChildrenComponent } from './children/children.component';

@NgModule({
    declarations: [
        ParentComponent,
        ChildrenComponent
    ],
    imports: [
        CommonModule,
        ParentRouterModule
    ],
    exports: [ ParentComponent ],
    providers: [],
})
export class ParentModule {}
