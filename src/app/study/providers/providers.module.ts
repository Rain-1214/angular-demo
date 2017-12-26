import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivodersComponent } from './providers.component';
import { ProvidersRouterModule } from './providers-router.module';
import { UserService, APP_CONFIG, HERO_DI_CONFIG } from './service/user.service';
import { LamborghiniServiceProviders } from './service/lamborghini.service';
import { CarService } from './service/car.service';

@NgModule({
    declarations: [
        PrivodersComponent
    ],
    imports: [
        CommonModule,
        ProvidersRouterModule
    ],
    exports: [
        PrivodersComponent
    ],
    providers: [
        {
            provide: UserService,
            useFactory() {
                return new UserService('Tom');
            }
        },
        LamborghiniServiceProviders,
        {
            provide: APP_CONFIG,
            useValue: HERO_DI_CONFIG
        }
    ],
})
export class ProvidersModule {}
