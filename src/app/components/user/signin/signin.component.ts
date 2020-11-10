import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginData = {
    email:'',
    password:''
  }
  constructor(private authService:AuthService, private router:Router) {}
  ngOnInit(): void {
  }
  signinUser(){
    this.authService.signinUser(this.loginData)
    .subscribe(
      res =>{
      console.log(res)
      localStorage.setItem('token', res.access_token)
      window.alert('succes login')
      res => this.router.navigate(['users/' +res._id])
    },
    )
  }

  }
