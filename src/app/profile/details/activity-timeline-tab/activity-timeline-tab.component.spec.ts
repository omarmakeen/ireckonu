import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTimelineTabComponent } from './activity-timeline-tab.component';

describe('ActivityTimelineTabComponent', () => {
  let component: ActivityTimelineTabComponent;
  let fixture: ComponentFixture<ActivityTimelineTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityTimelineTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTimelineTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
