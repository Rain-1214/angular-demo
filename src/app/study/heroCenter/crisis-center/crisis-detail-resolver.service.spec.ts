/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrisisDetailResolverService } from './crisis-detail-resolver.service';

describe('Service: CrisisDetailResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrisisDetailResolverService]
    });
  });

  it('should ...', inject([CrisisDetailResolverService], (service: CrisisDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});