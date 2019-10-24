import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { config } from 'src/config/pages-config';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from '../profile-search/profile.service';


@Component({
  selector: 'app-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.sass']
})
export class DetailsComponent implements OnInit {

  profile: any;
  tableData: any;
  
  constructor(private router: Router, private translate: TranslateService, profileService: ProfileService) {
  }

  ngOnInit() {
    this.profile = history.state.profile;
    if (!this.profile)
      this.router.navigate([config.profileSearch.route]);
    else {
      this.tableData = [
        {
          header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.prefix'),
          value: this.profile.prefix
        },
        {
          header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.firstName'),
          value: this.profile.first_name
        },
        {
          header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.lastName'),
          value: this.profile.last_name
        },
        {
          header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.suffix'),
          value: this.profile.suffix
        },
        {
          header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.loyaltyMemberId'),
          value: this.profile.loyalty_member_id
        },
        {
          header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.phone'),
          value: this.profile.phone
        },
        {
          header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.address'),
          value: this.profile.address
        },
        {
          header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.birthdate'),
          value: this.profile.birthdate
        },
        {
          header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.language'),
          value: "Englis"
        }

      ]
    }
  }

}
