import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfigLoaderService } from './shared/services/config-loader.service';
import { HttpModule, BrowserXhr, ResponseOptions, XSRFStrategy } from '@angular/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { CustomTranslateLoader } from './shared/utils/custom-translate-loader.component';
import { Router } from '@angular/router';
import { HttpConfigInterceptor } from './shared/services/interceptors/httpconfig-interceptor.service';
import { ErrorDialogService } from './shared/components/error-dialog/error-dialog.service';
import { ErrorDialogComponent } from './shared/components/error-dialog/error-dialog.component';

export function configLoaderFactory(config: ConfigLoaderService) {
  return () => config.load();
}

export function createTranslateLoader(http: HttpClient, configLoaderService: ConfigLoaderService) {
  return new CustomTranslateLoader(http, configLoaderService, environment.configPath + 'i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient, ConfigLoaderService]
      }
    })
  ],
  providers: [ConfigLoaderService, ErrorDialogService,
    {
      provide: APP_INITIALIZER,
      useFactory: configLoaderFactory,
      deps: [ConfigLoaderService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
