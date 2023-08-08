import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ShareDataService {
  dataShare: any

  constructor() { }

  setData(data: any) {
    sessionStorage.setItem('dataSV', JSON.stringify(data))
  }

  getData() {
    const data = sessionStorage.getItem('dataSV')
    return data ? JSON.parse(data) : null
  }
}
