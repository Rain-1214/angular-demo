import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivodersComponent } from './providers.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'provide',
                component: PrivodersComponent
            }
        ]),
    ],
    exports: [ RouterModule ],
})
export class ProvidersRouterModule {}
