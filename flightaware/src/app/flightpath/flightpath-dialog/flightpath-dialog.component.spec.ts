import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightpathDialogComponent } from './flightpath-dialog.component';

describe('FlightpathDialogComponent', () => {
  let component: FlightpathDialogComponent;
  let fixture: ComponentFixture<FlightpathDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightpathDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightpathDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
