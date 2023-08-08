import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { CookieService } from 'src/app/service/cookie.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!: FormGroup
  isLogin = false
  isError = false
  err: string = ''

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private cookieService: CookieService,
    private route: Router,
    private toast: ToastrService
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
    this.authService.login(username, password).subscribe({
      next: data => {
        this.cookieService.saveToken(data['access_token'])
        this.cookieService.saveRefreshToken(data['refresh_token'])
        this.isLogin = true
        this.route.navigate(['/home'])
        this.toast.success('Đăng nhập thành công ', 'Successfully')
      },
      error: err => {
        this.err = err['error']['message']
        this.isError = true
      }
    })
  }

  resetForm(){
    this.form.reset();
  }

  showError(error: string) {
    this.toast.error(error, 'Failed !')
    this.isError = false
  }
}
