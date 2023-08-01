import { Component, OnInit } from '@angular/core';
// import { ShareDataService } from 'src/app/service/share-data.service';
import { SinhvienService } from 'src/app/service/sinhvien.service';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css']
})
export class InfoDetailComponent implements OnInit{
  dataSV: any
  constructor(
    // private shareDataService: ShareDataService,
    private sinhvienService: SinhvienService
  ){}

  ngOnInit(): void {
    this.inforSinhVien()
  }

   inforSinhVien() {
    this.sinhvienService.getSinhVien().subscribe({
      next: data => {
        console.log(data)
        this.dataSV = data['data']
      },

      error: err => {
        console.log(err)
      }
    })
  }
}
