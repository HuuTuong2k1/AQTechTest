import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../../service/cookie.service';
import { SinhvienService } from 'src/app/service/sinhvien.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit{
  infosv: any
  isLogin = false

  constructor(
    private cookieService: CookieService,
    private route: Router,
    private svService: SinhvienService
  ){}

  ngOnInit(): void {
    this.isLogin = this.cookieService.checkIsLogin();
    console.log(this.isLogin)
    if(this.isLogin == true) {
      this.route.navigate([''])
      this.getInfoSV()
    } else {
      this.route.navigate(['/login'])
    }
  }

  logout() {
    this.cookieService.logout();
    location.reload()
  }

  getInfoSV() {
    this.svService.getSinhVien().subscribe({
      next: data => {
        console.log(data)
      }, 
      error : err => {
        console.log(err)
      }
    });
  }
}
