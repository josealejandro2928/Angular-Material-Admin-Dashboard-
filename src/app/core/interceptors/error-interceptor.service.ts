import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { LoggedInUserService } from '../loggedInUser/logged-in-user.service';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private loggedInUserService: LoggedInUserService,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
    private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        localStorage.clear();
        this.toastr.error('Usuario no autorizado.', 'Error!', {
          timeOut: 5000,
          progressBar: true,
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['auth/login']);
      }
      if (err.status === 403) {
        localStorage.clear();
        this.toastr.error('Usuario no autorizado.', 'Error!', {
          timeOut: 5000,
          progressBar: true,
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['auth/login']);
      }
      if (err.status === 404) {
        this.toastr.error('Error 404.', 'Error!', {
          timeOut: 5000,
          progressBar: true,
          positionClass: 'toast-bottom-right'
        });
        // this.router.navigate(['authentication/login']);
      }
      if (err.status === 0) {
        localStorage.clear();
        this.toastr.error('Usuario no autorizado.', 'Error!', {
          timeOut: 5000,
          progressBar: true,
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['auth/login']);
      }
      if (!err.status && !err.error) {
        localStorage.clear();
        this.toastr.error('Usuario no autorizado.', 'Error!', {
          timeOut: 5000,
          progressBar: true,
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['auth/login']);
      }

      const error = err.error ? err.error.message : err.statusText;
      return next.handle(request);
    }));
  }
}
