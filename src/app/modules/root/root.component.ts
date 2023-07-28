import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from '../../service/cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit{
  isLogin = false;

  constructor(
    private cookieService: CookieService,
    private route: Router,
  ){}

  ngOnInit(): void {
    this.isLogin = this.cookieService.checkIsLogin();
    if(this.isLogin) {
      this.route.navigate([''])
    } else {
      this.route.navigate(['/login'])
    }
  }

  logout() {
    this.cookieService.logout();
    location.reload()
  }
}
