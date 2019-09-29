import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthServiceService, private snackBar: MatSnackBar) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = request.url.includes('/auth/userinfo');
    if (url) {
      // TODO Use auth service instead of localStorage
      const headersOpt = new HttpHeaders({
        Authorization: localStorage.getItem('user')
      });
      const options = request.clone({
        headers: headersOpt
      });
      return next.handle(options);
    }

    // TODO It's better to use https://angular.io/api/core/ErrorHandler
    return next.handle(request).pipe(
      catchError( (error: HttpErrorResponse) => {
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
