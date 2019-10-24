import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SpinnerService } from './shared/components/spinner/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  title = 'ireckonu';
  showHeader = false;
  showSidebar = false;
  showFooter = false;

  constructor(translate: TranslateService, private router: Router, private activatedRoute: ActivatedRoute, public spinnerService: SpinnerService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('defaultWording');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('enWording');
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showHeader = this.activatedRoute.firstChild.snapshot.data.showHeader !== false;
        this.showSidebar = this.activatedRoute.firstChild.snapshot.data.showSidebar !== false;
        this.showFooter = this.activatedRoute.firstChild.snapshot.data.showFooter !== false;
      }
    });
  }

}
