import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../../service/cookie.service';
// import { SinhvienService } from 'src/app/service/sinhvien.service';
// import { ShareDataService } from 'src/app/service/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit{
  dataSV: any
  isLogin = false

  constructor(
    private cookieService: CookieService,
    private route: Router,
    // private sinhvienService: SinhvienService,
    // private shareDataService: ShareDataService
  ){}

  ngOnInit(): void {
    this.isLogin = this.cookieService.checkIsLogin();
    if(this.isLogin) {
      // this.inforSinhVien()
    } else {
      this.route.navigate(['/login'])
    }
  }

  // inforSinhVien() {
  //   this.sinhvienService.getSinhVien().subscribe({
  //     next: data => {
  //       this.dataSV = data['data']
  //       this.shareDataService.dataShare = this.dataSV
  //     },

  //     error: err => {
  //       console.log(err)
  //     }
  //   })
  // }
}
