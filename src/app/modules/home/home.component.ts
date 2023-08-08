import { Component, OnInit } from '@angular/core';
import { SinhvienService } from 'src/app/service/sinhvien.service';
import { ShareDataService } from 'src/app/service/share-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataSV: any

  constructor(
    private sinhvienService: SinhvienService,
    private shareService: ShareDataService
  ){}

  ngOnInit(): void {
    this.inforSinhVien()
  }

  inforSinhVien() {
    this.sinhvienService.getSinhVien().subscribe({
      next: data => {
        this.dataSV = data['data']
        this.saveDataToShareService(data['data'])
      }, 
      error: err => {
        console.log(err)
      }
    })
  }

  saveDataToShareService(data: any) {
    this.shareService.setData(data)
  }
}
