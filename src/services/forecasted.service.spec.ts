import { TestBed } from '@angular/core/testing';

import { ForecastedService } from './forecasted.service';

describe('ForecastedService', () => {
  let service: ForecastedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForecastedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
