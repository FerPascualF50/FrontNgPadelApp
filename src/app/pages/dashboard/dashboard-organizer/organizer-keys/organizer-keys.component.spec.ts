import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerKeysComponent } from './organizer-keys.component';

describe('OrganizerKeysComponent', () => {
  let component: OrganizerKeysComponent;
  let fixture: ComponentFixture<OrganizerKeysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerKeysComponent]
    });
    fixture = TestBed.createComponent(OrganizerKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
