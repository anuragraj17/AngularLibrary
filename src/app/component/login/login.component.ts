import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../service/LoginService/login.service';
import {User} from '../../model/user.model';
import {Router } from "@angular/router";
import { MatDialog, MatDialogRef } from '@angular/material';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users : User[];
  loginUserData = {};
  public errorMsg: any;

  constructor(private _login : LoginService, 
    private router : Router,
    public dialouge : MatDialog,
    public dialogBox : MatDialogRef<LoginComponent>
    ) {  }

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

  openSignUpModal(){
    this.hideLoginModal();
    this.dialouge.open(RegisterComponent,{
      height: '600px',
      width: '800px',
      panelClass: 'signup-dialog'
    });
  }
  hideLoginModal(){
    this.dialogBox.close();
  }
}
