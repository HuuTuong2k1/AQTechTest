import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required], // FormControl cho trường "username" với giá trị ban đầu rỗng và yêu cầu bắt buộc
      password: ['', Validators.required]  // FormControl cho trường "password" với giá trị ban đầu rỗng và yêu cầu bắt buộc
    });
  }

  formSubmit() {
    const {username, password} = this.form.value;
    this.authService.login(username, password).subscribe({
      next: data => {
        console.log("Login ok")
      },
      error: err => {
        console.log(err)
      }
    })
  }

  resetForm(){
    this.form.reset();
  }
}
