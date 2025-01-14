/// <reference types="node" />
import https = require('https');
import request = require('request');
import { Authenticator } from './auth';
import { User } from './config_types';
export declare class CloudAuth implements Authenticator {
    isAuthProvider(user: User): boolean;
    applyAuthentication(user: User, opts: request.Options | https.RequestOptions): Promise<void>;
    private getToken;
    private isExpired;
    private updateAccessToken;
}
