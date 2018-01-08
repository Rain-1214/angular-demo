/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActivatedRouteStubService } from './ActivatedRouteStub.service';

describe('Service: ActivatedRouteStub', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivatedRouteStubService]
    });
  });

  it('should ...', inject([ActivatedRouteStubService], (service: ActivatedRouteStubService) => {
    expect(service).toBeTruthy();
  }));
});