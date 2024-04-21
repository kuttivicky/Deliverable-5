import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftDialogComponent } from './aircraft-dialog.component';

describe('AircraftDialogComponent', () => {
  let component: AircraftDialogComponent;
  let fixture: ComponentFixture<AircraftDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AircraftDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AircraftDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
