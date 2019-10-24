import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { config } from 'src/config/pages-config';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from '../shared/services/profile-service/profile.service';
import { Profile } from '../shared/models/profile.model';


@Component({
  selector: 'app-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.sass']
})
export class DetailsComponent implements OnInit {

  profile: Profile;
  tableData: any;
  
  constructor(private router: Router, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.profile = history.state.profile;
    if (!this.profile)
      this.router.navigate([config.profileSearch.route]);
    else {
      this.tableData = this.profileService.getProfileDetails(this.profile);
    }
  }

}
