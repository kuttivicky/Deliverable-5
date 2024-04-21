import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineDialogComponent } from './airline-dialog.component';

describe('AirlineDialogComponent', () => {
  let component: AirlineDialogComponent;
  let fixture: ComponentFixture<AirlineDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirlineDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirlineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
