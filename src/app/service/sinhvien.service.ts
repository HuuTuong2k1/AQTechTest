import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SinhvienService {

  constructor(
    private http: HttpClient
  ) { }

  public getSinhVien(): Observable<any> {
    return this.http.post('/dkmh/w-locsinhvieninfo','');
  }
}
