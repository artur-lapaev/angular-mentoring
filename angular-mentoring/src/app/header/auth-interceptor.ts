import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import { AmStore } from '../store/am-store';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthServiceService, private snackBar: MatSnackBar, private store: Store<AmStore>) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = request.url.includes('/auth/userinfo');
    if (url) {
      let token;
      this.store.subscribe(user => {
        token = user.login.token;
      });

      const headersOpt = new HttpHeaders({
        Authorization: token
      });
      const options = request.clone({
        headers: headersOpt
      });
      return next.handle(options);
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          this.snackBar.open(`An error occurred: ${error.error.message}`, 'close', {
            duration: 3500,
            panelClass: ['login-not-valid'],
            verticalPosition: 'top'
          });
        } else {
          this.snackBar.open(`Backend returned code ${error.status}, ` +
            `body was: ${error.error}`, 'close', {
            duration: 3500,
            panelClass: ['login-not-valid'],
            verticalPosition: 'top'
          });
        }
        return throwError('Something bad happened; please try again.');
      })
    );
  }

}
