import { TestBed } from '@angular/core/testing';

import { SingleOrderServicesService } from './single-order-services.service';

describe('SingleOrderServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleOrderServicesService = TestBed.get(SingleOrderServicesService);
    expect(service).toBeTruthy();
  });
});
