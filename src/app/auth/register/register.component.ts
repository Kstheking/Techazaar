import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public username!: string; 
  public password!: string;
  public message!: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(registerForm : NgForm){
    this.username = registerForm.value.userDetails.username;
    this.password = registerForm.value.userDetails.password;
    this.authService.register(this.username, this.password).subscribe((result) => {
      this.message = result.msg;
      this.router.navigate(['login']);
    }, (err) => {
      this.message = err.error.msg;
    })
  }
}
