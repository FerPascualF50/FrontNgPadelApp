import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerPaymentsComponent } from './organizer-payments.component';

describe('OrganizerPaymentsComponent', () => {
  let component: OrganizerPaymentsComponent;
  let fixture: ComponentFixture<OrganizerPaymentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerPaymentsComponent]
    });
    fixture = TestBed.createComponent(OrganizerPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
