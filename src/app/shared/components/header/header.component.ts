import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { config } from 'src/config/pages-config';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  title: string;

  constructor(translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.title = config.profileSearch.titleKey;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.title = this.activatedRoute.firstChild.snapshot.data.titleKey;
      }
    });
  }

}
