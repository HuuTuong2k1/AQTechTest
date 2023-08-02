import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EducationProgramService {
  requestBody = {
    "filter": {
      "loai_chuong_trinh_dao_tao": 1
    },
    "additional": {
      "paging": {
        "limit": 1,
        "page": 2
      },
      "ordering": [
        {
          "name": "sample string 1",
          "order_type": 2
        }
      ]
    }
  };

  constructor(
    private http: HttpClient
  ) { }

  public educationProgram(): Observable<any> {
    return this.http.post("/sch/w-locdsctdtsinhvien",this.requestBody)
  }
}
