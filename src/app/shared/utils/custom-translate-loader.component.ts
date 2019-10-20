import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { WORDING_FILES } from '../constants/defines';

import { ConfigLoaderService } from '../services/config-loader.service';

export class CustomTranslateLoader extends TranslateHttpLoader {
    private customHttp;
    private config;
    constructor (http: HttpClient, configLoaderService: ConfigLoaderService, prefix?: string, suffix?: string) {
        super(http, prefix, suffix);
        this.customHttp = http;
        this.config = configLoaderService;
    }

    public getTranslation (lang?: string) {
        if (lang === WORDING_FILES.defaultWording) {
            return this.config.getDefaultWordingFile();
        } else if (lang === WORDING_FILES.deWording) {
            return this.config.getDeWordingFile();
        }
    }

}
