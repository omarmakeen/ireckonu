import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { API_URLS } from '../shared/constants/routes-config';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles: any;
  currentProfile: any;
  constructor(private httpClient: HttpClient, private translate: TranslateService) { }

  getProfiles() {
    return this.httpClient.get(API_URLS.PROFILE.GET_PROFILES);
  }

  // getProfileDetails(profile) {
  //   return [
  //     {
  //       header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.prefix'),
  //       value: profile.prefix
  //     },
  //     {
  //       header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.firstName'),
  //       value: profile.first_name
  //     },
  //     {
  //       header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.lastName'),
  //       value: profile.last_name
  //     },
  //     {
  //       header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.suffix'),
  //       value: profile.suffix
  //     },
  //     {
  //       header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.loyaltyMemberId'),
  //       value: profile.loyalty_member_id
  //     },
  //     {
  //       header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.phone'),
  //       value: profile.phone
  //     },
  //     {
  //       header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.address'),
  //       value: profile.address
  //     },
  //     {
  //       header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.birthdate'),
  //       value: profile.birthdate
  //     },
  //     {
  //       header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.language'),
  //       value: "Englis"
  //     }

  //   ]
  // }
}

