import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LearningResultService {

  constructor(
    private http: HttpClient
  ) { }

  public getDiem(): Observable<any> {
    return this.http.post("api/srm/w-locdsdiemsinhvien", "")
  }
}
