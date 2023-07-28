import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://sp.aqtech.edu.vn/release_portal.netweb/api/auth/login';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private http: HttpClient) {}

  // login(username: string, password: string): Observable<any> {
  //   const body = new HttpParams()
  //     .set('username', username)
  //     .set('password', password)
  //     .set('grant_type', 'password');

  //   return this.http.post(AUTH_API, body.toString(), httpOptions);
  // }

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const body = new HttpParams()
    .set('username', username)
    .set('password', password)
    .set('grant_type', 'password');
      
    return this.http.post(
      AUTH_API,
      body.toString(),
      { headers: headers }
    )
  }
}