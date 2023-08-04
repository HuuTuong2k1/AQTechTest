import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TuitionService {

  constructor(
    private http: HttpClient
  ) { }

  public getHocPhi(): Observable<any> {
    return this.http.post("/rms/w-locdstonghophocphisv","")
  }
}
