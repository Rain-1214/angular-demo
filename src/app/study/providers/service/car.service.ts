import { Injectable } from '@angular/core';

@Injectable()
export class CarService {

    constructor(
        public tireNum: number,
        public engineCylinderNum: number,
        public brand?: string,
    ) {}

    start(): void {
        console.log(`${this.brand}启动了`);
    }

    run(meter): void {
        console.log(`${this.brand}跑了${meter}米`);
    }

    stop(): void {
        console.log(`${this.brand}停了`);
    }

}
