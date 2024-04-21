import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightlogisticComponent } from './flightlogistic.component';

describe('FlightlogisticComponent', () => {
  let component: FlightlogisticComponent;
  let fixture: ComponentFixture<FlightlogisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightlogisticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightlogisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
