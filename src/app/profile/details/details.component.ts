import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  profile: any;
  constructor(private profileService: ProfileService, private router: Router) {
  }

  ngOnInit() {
    this.profile = this.profileService.currentProfile;
    if (!this.profile)
      this.router.navigate(['/profile']);
  }

}
