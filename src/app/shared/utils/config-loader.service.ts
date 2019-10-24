import { Injectable, Injector } from '@angular/core';
import { Http } from '@angular/http';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ConfigLoaderService {

    public defaultWordingfile: any;
    public enWordingfile: any;
    public constructor (private injector: Injector) {
    }

    public load (): Promise<any> {

        const defaultWording = new Promise((resolve, reject) => {
            setTimeout(() => {
                const http = this.injector.get(Http);
                http.get(environment.configPath + 'i18n/en.json').subscribe(response => {
                    this.defaultWordingfile = response.json();
                    resolve(this.defaultWordingfile);
                });
            });
        });

        const enWording = new Promise((resolve, reject) => {
            setTimeout(() => {
                const http = this.injector.get(Http);
                http.get(environment.cmsConfigPath + 'i18n/deWording.json').subscribe(response => {

                    try {

                        this.enWordingfile = response.json();

                        resolve(this.enWordingfile);
                    } catch (error) {

                        console.warn('not valid json for deWording.json file');
                        resolve(null);
                    }
                }, (err) => {
                    resolve(null);
                });
            });
        });

        return Promise.all([defaultWording, enWording]);
    }

    public getDefaultWordingFile () {
        return of(this.defaultWordingfile);
    }
    public getEnWordingFile () {
        return of(this.enWordingfile);
    }
}
