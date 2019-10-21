import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { ProfileService } from './profile.service';
import { DetailsTabComponent } from './details/details-tab/details-tab.component';
import { ProfileIdTabComponent } from './details/profile-id-tab/profile-id-tab.component';
import { ActivityTimelineTabComponent } from './details/activity-timeline-tab/activity-timeline-tab.component';


@NgModule({
  declarations: [SearchComponent, DetailsComponent, DetailsTabComponent, ProfileIdTabComponent, ActivityTimelineTabComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  providers: [ProfileService]
})
export class ProfileModule { }
