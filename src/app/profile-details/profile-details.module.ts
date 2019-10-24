import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDetailsRoutingModule } from './profile-details-routing.module';
import { DetailsComponent } from './profile-details.component';
import { DetailsTabComponent } from './details-tab/details-tab.component';
import { ProfileIdTabComponent } from './profile-id-tab/profile-id-tab.component';
import { ActivityTimelineTabComponent } from './activity-timeline-tab/activity-timeline-tab.component';
import { QuickFactsComponent } from './quick-facts/quick-facts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [DetailsComponent, DetailsTabComponent, ProfileIdTabComponent, ActivityTimelineTabComponent, QuickFactsComponent],
  imports: [
    CommonModule,
    ProfileDetailsRoutingModule,
    SharedModule
  ]
})
export class ProfileDetailsModule { }
