import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import {Observable} from 'rxjs';

import {AuthenticationService} from '../../core/authentication/authentication.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userLocal = this.authenticationService.getUser();

    if (userLocal) {
      request = request.clone({
        setHeaders: {
          token: `${userLocal.token}`
        }
      });

      return next.handle(request);
    } else {
      request = request.clone({
        setHeaders: {
          Authorization: ''
        }
      });

      return next.handle(request);
    }
  }

  setHeader() {
    const userLocal = this.authenticationService.getUser();

    if (userLocal) {
      return {
        headers: new HttpHeaders().set('Authorization', `Bearer ${userLocal.token}`),
      };
    } else {
      return {
        headers: new HttpHeaders().set('Authorization', ''),
      };
    }
  }
}
