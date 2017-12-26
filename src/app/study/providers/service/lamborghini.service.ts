import { Injectable } from '@angular/core';
import { CarService } from './car.service';
import { UserService } from './user.service';

@Injectable()
export class LamborghiniService extends CarService {

    constructor(
        tireNum: number,
        engineCylinderNum: number,
        public username: string
    ) {
        super(tireNum, engineCylinderNum);
        this.brand = 'Lamborghini';
    }

    fly(): void {
        console.log(`${this.username}的${this.brand}会TM飞`);
    }

}

const LamborghiniFactory = (userService: UserService) => {
    return new LamborghiniService(4, 24, userService.username);
};

export const LamborghiniServiceProviders = {
    provide: CarService,
    useFactory: LamborghiniFactory,
    deps: [ UserService ]
};

