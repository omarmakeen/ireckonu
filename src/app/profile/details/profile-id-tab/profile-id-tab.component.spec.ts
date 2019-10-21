import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIdTabComponent } from './profile-id-tab.component';

describe('ProfileIdTabComponent', () => {
  let component: ProfileIdTabComponent;
  let fixture: ComponentFixture<ProfileIdTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileIdTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileIdTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
