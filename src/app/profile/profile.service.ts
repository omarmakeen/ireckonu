import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profiles = [];
  currentProfile: any;
  constructor(private httpClient: HttpClient) { }

  getProfiles() {
    return this.httpClient.get(environment.apiUrl + '/Data.json');
  }
}

