import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
