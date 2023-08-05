import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestScheduleService {

  rqBody = {
    "filter": {
      "hoc_ky": 20211
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

  constructor(
    private http: HttpClient
  ) { }

  // Cần phải truyền học kỳ vào body nữa mới được
  public getLichThi(): Observable<any> {
    return this.http.post("/epm/w-locdslichthisvtheohocky",this.rqBody)
  }
}
