import { Injectable } from '@angular/core';


@Injectable()
export class LoggerService {

  // tslint:disable-next-line:no-inferrable-types
  nextId: number = 0;

  constructor(
    private enable: boolean,
  ) {}

  log(message: string): void {
    if (this.enable) {
      console.log(`LoggerService:${message}`);
    }
  }
}
