import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizerComponent } from './dashboard-organizer.component';

describe('DashboardOrganizerComponent', () => {
  let component: DashboardOrganizerComponent;
  let fixture: ComponentFixture<DashboardOrganizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizerComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
