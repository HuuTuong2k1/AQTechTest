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
  public getLichThi(hocky: string): Observable<any> {
    let rqBody = {
      "filter": {
        "hoc_ky": hocky
      },
      "additional": {
        "paging": {
          "limit": 100,
          "page": 1
        },
        "ordering": [
          {
            "name": "",
            "order_type": ""
          }
        ]
      }
    };
    return this.http.post("api/epm/w-locdslichthisvtheohocky",rqBody)
  }
}
