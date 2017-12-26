import { Component, OnInit, Inject } from '@angular/core';
import { CarService } from './service/car.service';
import { LamborghiniService } from './service/lamborghini.service';
import { AppConfig, APP_CONFIG } from './service/user.service';

@Component({
    selector: 'app-privoders',
    templateUrl: './providers.component.html',
})
export class PrivodersComponent implements OnInit {
    constructor(
        private carService: CarService,
        @Inject(APP_CONFIG) appConfig: AppConfig
    ) {
        console.log(appConfig.apiEndConding);
    }

    ngOnInit() {
        console.log(this.carService.fly());
    }
}
