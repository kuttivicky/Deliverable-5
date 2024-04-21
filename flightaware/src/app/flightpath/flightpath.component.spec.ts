import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightpathComponent } from './flightpath.component';

describe('FlightpathComponent', () => {
  let component: FlightpathComponent;
  let fixture: ComponentFixture<FlightpathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightpathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
