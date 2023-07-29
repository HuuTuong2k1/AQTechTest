import { Injectable } from '@angular/core';
import { CookieService } from './cookie.service';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HelperService implements HttpInterceptor{

  constructor(
    private cookieService: CookieService,
    private route: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.cookieService.getCookie();
    
    if(token && !req.headers.has('Authorization')) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ${token}'
        }
      })
    }

    return next.handle(req).pipe(
      catchError((error) => {
        if (error.status === 401) {
          // Chuyển hướng về trang đăng nhập
          this.cookieService.logout()
          this.route.navigate(['/login']);
        }
        return of(error);
      })
    )
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HelperService, multi: true },
];
