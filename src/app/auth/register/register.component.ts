import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public username!: string; 
  public password!: string;
  public message!: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(registerForm : NgForm){
    this.username = registerForm.value.userDetails.username;
    this.password = registerForm.value.userDetails.password;
    this.authService.register(this.username, this.password).subscribe((result) => {
      this.message = result.msg;
    }, (err) => {
      this.message = err.error.msg;
    })
  }
}
