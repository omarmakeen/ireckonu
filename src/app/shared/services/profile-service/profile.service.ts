import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { API_URLS } from '../../constants/routes-config';
import { Profile } from '../../models/profile.model';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { INTERCEPTOR } from '../../constants/defines';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles: Profile[];
  currentProfile: Profile;
  constructor(private httpClient: HttpClient, private translate: TranslateService) { }

  getProfiles(): Observable<Profile[]> {

    let headers = new HttpHeaders();
    // headers = headers.set(INTERCEPTOR.SKIP_SPINNER, '');
    // headers = headers.set(INTERCEPTOR.SKIP_ERROR, '');

    return this.httpClient.get(API_URLS.PROFILE.GET_PROFILES, { headers: headers }).pipe(map((response: any) => {
      this.profiles = response;
      return response;
    }), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  getProfileDetails(profile: Profile) {
    return [
      {
        header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.prefix'),
        value: profile.prefix
      },
      {
        header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.firstName'),
        value: profile.first_name
      },
      {
        header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.lastName'),
        value: profile.last_name
      },
      {
        header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.suffix'),
        value: profile.suffix
      },
      {
        header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.loyaltyMemberId'),
        value: profile.loyalty_member_id
      },
      {
        header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.phone'),
        value: profile.phone
      },
      {
        header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.address'),
        value: profile.address
      },
      {
        header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.birthdate'),
        value: profile.birthdate
      },
      {
        header: this.translate.instant('profileDetails.DetailsTab.profileTableHeader.language'),
        value: "Englis"
      }

    ]
  }
}

