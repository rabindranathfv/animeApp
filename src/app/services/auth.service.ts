import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'ErHiZZoBLd0sdXB1HRICI7Sjz773nQi1',
    domain: 'authanimeapp.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4000/callback',
    scope: 'openid'
  });

  constructor( public router: Router ) { }

  public login(): void {
    this.auth0.authorize();
  }
}
