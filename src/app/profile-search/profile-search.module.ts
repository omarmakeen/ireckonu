import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SearchComponent } from './profile-search.component';
import { ProfileService } from './profile.service';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  providers: [ProfileService]
})
export class ProfileSearchModule { }
