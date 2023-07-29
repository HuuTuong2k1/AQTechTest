import { Component } from '@angular/core';
import { CookieService } from 'src/app/service/cookie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private cookieService: CookieService
  ) {}

  logout() {
    this.cookieService.logout();
    location.reload()
  }
}
