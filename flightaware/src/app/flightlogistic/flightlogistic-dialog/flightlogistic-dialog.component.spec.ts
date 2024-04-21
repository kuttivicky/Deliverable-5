import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightlogisticDialogComponent } from './flightlogistic-dialog.component';

describe('FlightlogisticDialogComponent', () => {
  let component: FlightlogisticDialogComponent;
  let fixture: ComponentFixture<FlightlogisticDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightlogisticDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightlogisticDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
