import { Injectable } from '@angular/core';
import { CookieService as myCookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(private myCookieService: myCookieService) { }

  public saveToken(token: string) {
    this.myCookieService.set('access-token', token, 1)
  }

  public saveRefreshToken(RFtoken: string) {
    this.myCookieService.set('refresh-token', RFtoken)
  }

  public checkIsLogin(): boolean {
    return this.myCookieService.check('access-token')
  }

  public logout() {
    this.myCookieService.deleteAll()
  }

}
