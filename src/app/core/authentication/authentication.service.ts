import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

import { IUser } from '../classes/user.class';
import { LoggedInUserService } from '../loggedInUser/logged-in-user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  userUrl = environment.apiUrl + 'auth/login';
  userLogout = environment.apiUrl + 'auth/logout';

  constructor(private httpClient: HttpClient,
    private loggedInUserService: LoggedInUserService) {
  }

  login(user: string, password: string) {
    const base64EncodedPw = btoa(user + ':' + password);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64EncodedPw
      }),
      username: user,
      password: password
    };

    return this.httpClient
      .post<IUser>(this.userUrl, httpOptions);

  }

  logout(): Observable<any> {
    return this.httpClient.get(this.userLogout);
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('user'));
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  {
    provide: AuthenticationService,
    useClass: AuthenticationService
  }
];

