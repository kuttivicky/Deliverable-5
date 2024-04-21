import { TestBed } from '@angular/core/testing';

import { FlightlogisticService } from './flightlogistic.service';

describe('FlightlogisticService', () => {
  let service: FlightlogisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightlogisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
