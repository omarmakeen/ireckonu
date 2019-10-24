import { environment } from 'src/environments/environment.prod';

export const API_URLS = {
    PROFILE: {
        GET_PROFILES: environment.apiBasrUrl + '/Data.json',
    }
}