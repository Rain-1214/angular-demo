/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckAuthService } from './CheckAuth.service';

describe('Service: CheckAuth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckAuthService]
    });
  });

  it('should ...', inject([CheckAuthService], (service: CheckAuthService) => {
    expect(service).toBeTruthy();
  }));
});