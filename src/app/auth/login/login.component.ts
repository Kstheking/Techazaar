import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username!: string; 
  public password!: string;
  public message!: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(loginForm : NgForm){
    this.username = loginForm.value.userDetails.username;
    this.password = loginForm.value.userDetails.password;
    this.authService.login(this.username, this.password).subscribe((result) => {
      this.message = result.msg;
    }, (err) => {
      this.message = err.error.msg;
    })
  }
}
