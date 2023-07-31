import { Component, OnInit } from '@angular/core';
import { CookieService } from 'src/app/service/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataSV: any

  constructor(
    private cookieService: CookieService,
  ) {}

  ngOnInit(): void {
    // this.inforSinhVien()
  }

  logout() {
    this.cookieService.logout();
    location.reload()
  }
}
