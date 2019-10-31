import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { config } from 'src/config/pages-config';
import { ProfileService } from '../../services/profile-service/profile.service';
import { Subject } from 'rxjs/internal/Subject';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  title: string;
  profileInfo = new Subject<boolean>();

  show() {
    this.profileInfo.next(true);
  }

  hide() {
    this.profileInfo.next(false);
  }

  constructor(translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit() {
    this.title = config.profileSearch.titleKey;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = this.activatedRoute.firstChild.snapshot.data.titleKey;
        if(this.router.url === config.profileDetails.route){
          this.show();
        } else{
          this.hide();
        }
      }
    });
  }

}
