import { Injectable } from '@angular/core';
import { InjectionToken } from '@angular/core';

@Injectable()
export class UserService {
    constructor(public username: string) {
        this.username = username;
    }
}


export interface AppConfig {
    apiEndConding: string;
    title: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export const HERO_DI_CONFIG: AppConfig = {
    apiEndConding: 'api.www.com',
    title: 'hero'
};
