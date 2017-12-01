import { Directive, OnInit, OnDestroy } from '@angular/core';
import { LoggerService } from '../tool/logger/logger.Service';


@Directive({selector: '[appMySpy]'})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(
    private logger: LoggerService
  ) {}

  ngOnInit(): void {
    this.logIt('onInit');
  }
  ngOnDestroy(): void {
    this.logIt('destroy');
  }

  private logIt(msg: string) {
    this.logger.log(`Spy #${this.logger.nextId++} ${msg}`);
  }

}
