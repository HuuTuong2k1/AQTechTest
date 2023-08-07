import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { CookieService } from 'src/app/service/cookie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!: FormGroup
  isLogin = false
  err = ""
  ischeckNull = false

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private cookieService: CookieService,
    private route: Router
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required], // FormControl cho trường "username" với giá trị ban đầu rỗng và yêu cầu bắt buộc
      password: ['', Validators.required]  // FormControl cho trường "password" với giá trị ban đầu rỗng và yêu cầu bắt buộc
    });

    if(this.cookieService.checkIsLogin()) {
      this.isLogin = true
      this.route.navigate([''])
    }
  }

  formSubmit() {
    const {username, password} = this.form.value;
    (username == '' || password == '') ? this.ischeckNull = true :
                                          this.authService.login(username, password).subscribe({
                                            next: data => {
                                              console.log(data)
                                              this.cookieService.saveToken(data['access_token'])
                                              this.cookieService.saveRefreshToken(data['refresh_token'])
                                              this.isLogin = true
                                              this.route.navigate(['/home'])
                                            },
                                            error: err => {
                                              console.log(err);
                                              this.err = err['error']['message']
                                            }
                                          })
  }

  resetForm(){
    this.form.reset();
  }
}
