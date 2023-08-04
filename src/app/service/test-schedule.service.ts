import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestScheduleService {

  constructor(
    private http: HttpClient
  ) { }

  // Cần phải truyền học kỳ vào body nữa mới được
  public getLichThi(): Observable<any> {
    return this.http.post("/epm/w-locdslichthisvtheohocky","")
  }
}
