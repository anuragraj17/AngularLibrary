import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/LoginService/login.service';
import {User} from '../../model/user.model';
import {Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users : User[];
  loginUserData = {};
  public errorMsg: any;

  constructor(private _login : LoginService, private router : Router) {  }

  ngOnInit() {
  }

  loginAuthUser(){
    
    this._login.loginUser(this.loginUserData).subscribe(
      data => {
      this.users = data;
      window.localStorage.setItem("userName",this.users['uname']);
      this.router.navigateByUrl('/home');
    },
      err => this.errorMsg = err,
    )
  }
}
