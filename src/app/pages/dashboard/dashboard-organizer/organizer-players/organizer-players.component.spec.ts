import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerPlayersComponent } from './organizer-players.component';

describe('OrganizerPlayersComponent', () => {
  let component: OrganizerPlayersComponent;
  let fixture: ComponentFixture<OrganizerPlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizerPlayersComponent]
    });
    fixture = TestBed.createComponent(OrganizerPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
