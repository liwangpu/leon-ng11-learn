import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, share, switchMap, tap } from 'rxjs/operators';
import { ResourceStoreService } from './resource-store.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    public tokenRequest: Observable<string>;

    public constructor(
        private store: ResourceStoreService
    ) { }

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('origin:', request);

        return next.handle(request).pipe(catchError(response => {
            if (response.status === 401) {
                // this.tokenRequest = null;
                // console.log();

                return this.requestToken().pipe(switchMap(token => {

                    let secureHeaders: any = request.headers;
                    secureHeaders = secureHeaders.delete('Authorization');
                    secureHeaders = secureHeaders.append('Authorization', `${token}`);
                    const secureReq: any = request.clone({ headers: secureHeaders });
                    return next.handle(secureReq);
                }));
            }
            return throwError(response);
        }));
    }

    private requestToken(): Observable<string> {
        if (!this.tokenRequest) {
            console.log('init request');

            this.tokenRequest = this.store.login()
                .pipe(map(res => res.token))
                .pipe(share())
                .pipe(tap(token => {
                    localStorage.setItem('token', token);
                    this.tokenRequest = null;
                }));
        }
        return this.tokenRequest;

    }
}
