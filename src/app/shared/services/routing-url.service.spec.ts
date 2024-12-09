import { TestBed } from '@angular/core/testing';

import { RoutingUrlService } from './routing-url.service';

describe('RoutingUrlService', () => {
  let service: RoutingUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
