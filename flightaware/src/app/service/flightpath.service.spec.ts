import { TestBed } from '@angular/core/testing';

import { FlightPathService } from './flightpath.service';

describe('FlightpathService', () => {
  let service: FlightPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
