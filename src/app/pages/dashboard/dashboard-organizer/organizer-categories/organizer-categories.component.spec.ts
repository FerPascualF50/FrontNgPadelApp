import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerCategoriesComponent } from './organizer-categories.component';

describe('OrganizerCategoriesComponent', () => {
  let component: OrganizerCategoriesComponent;
  let fixture: ComponentFixture<OrganizerCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerCategoriesComponent]
    });
    fixture = TestBed.createComponent(OrganizerCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
