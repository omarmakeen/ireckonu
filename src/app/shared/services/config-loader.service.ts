import { Injectable, Injector } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { config } from '../../../config/pages-config';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ConfigLoaderService {

    private http: Http;
    private errors: any;
    private features: any;
    public defaultWordingfile: any;
    public deWordingfile: any;
    private commonErrors: any;
    private reasonsCodes: any;
    public constructor (private injector: Injector) {
        // super();
    }
    /**
     * load regex configuration file
     */
    public load (): Promise<any> {

        // const errorsConfig = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         const http = this.injector.get(Http);
        //         http.get(environment.cmsConfigPath + 'error-messages.json').subscribe(response => {

        //             try {

        //                 this.errors = response.json();

        //                 resolve(this.errors);
        //             } catch (error) {

        //                 console.warn('not valid json for error-messages.json file');

        //                 http.get(environment.configPath + 'error-messages.json').subscribe(response => {
        //                     this.errors = response.json();
        //                     resolve(this.errors);
        //                 });
        //             }
        //         }, error => {
        //             http.get(environment.configPath + 'error-messages.json').subscribe(response => {
        //                 this.errors = response.json();
        //                 resolve(this.errors);
        //             });
        //         });
        //     });
        // });

        // const commonErrorsConfig = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         const http = this.injector.get(Http);
        //         http.get(environment.cmsErrorMessagesPath + 'common.error.js').subscribe(response => {

        //             try {

        //                 this.commonErrors = response.json();

        //                 resolve(this.commonErrors);
        //             } catch (error) {

        //                 console.warn('not valid json for common.error.js file');

        //                 http.get(environment.configPath + 'common.error.json').subscribe(response => {
        //                     this.commonErrors = response.json();
        //                     resolve(this.commonErrors);
        //                 });
        //             }

        //         }, error => {
        //             http.get(environment.configPath + 'common.error.json').subscribe(response => {
        //                 this.commonErrors = response.json();
        //                 resolve(this.commonErrors);
        //             });
        //         });
        //     });
        // });

        const defaultWording = new Promise((resolve, reject) => {
            setTimeout(() => {
                const http = this.injector.get(Http);
                http.get(environment.configPath + 'i18n/en.json').subscribe(response => {
                    this.defaultWordingfile = response.json();
                    resolve(this.defaultWordingfile);
                });
            });
        });

        // const deWording = new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         const http = this.injector.get(Http);
        //         http.get(environment.cmsConfigPath + 'i18n/deWording.json').subscribe(response => {

        //             try {

        //                 this.deWordingfile = response.json();

        //                 resolve(this.deWordingfile);
        //             } catch (error) {

        //                 console.warn('not valid json for deWording.json file');
        //                 resolve(null);
        //             }
        //         }, (err) => {
        //             resolve(null);
        //         });
        //     });
        // });

        // return Promise.resolve(regexConfig);
        // return Promise.all([errorsConfig, commonErrorsConfig, defaultGermanWording, deWording]);
        return Promise.all([defaultWording]);
    }

    public loadPagesRoutes (): object | object[] {
        return config;
    }

    // public getcommonErrorsConfig () {
    //     return this.commonErrors;
    // }

    // public getErrorsConfig () {
    //     return this.errors;
    // }
    public getDefaultWordingFile () {
        return of(this.defaultWordingfile);
    }
    public getEnWordingFile () {
        return of(this.deWordingfile);
    }
    // public setCoreConfigRoute (): void {
    //     this.generalError = this.loadPagesRoutes()['generalError'].route;
    //     this.unauthorized = this.loadPagesRoutes()['unauthorized'].route;
    // }

    /**
     * get all reasons codes
     */
    // public getReasonsCodes () {
    //     return new Promise((resolve, reject) => {
    //         const http = this.injector.get(Http);
    //         if (this.reasonsCodes) {
    //             resolve(this.reasonsCodes);
    //         } else {
    //             http.get(environment.cmsConfigPath + 'reasons-config.json').subscribe(response => {

    //                 try {

    //                     this.reasonsCodes = response && response.json();

    //                     resolve(this.reasonsCodes);
    //                 } catch (error) {

    //                     http.get(environment.configPath + 'reasons-config.json').subscribe(response => {
    //                         this.reasonsCodes = response && response.json();
    //                         resolve(this.reasonsCodes);
    //                     });
    //                 }
    //             }, error => {
    //                 http.get(environment.configPath + 'reasons-config.json').subscribe(response => {
    //                     this.reasonsCodes = response && response.json();
    //                     resolve(this.reasonsCodes);
    //                 });
    //             });
    //         }
    //     });
    // }
}
