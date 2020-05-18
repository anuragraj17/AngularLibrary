import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../service/RegisterService/register.service';
import {MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};
  constructor(private _reg : RegisterService,public dialogBox : MatDialogRef<RegisterComponent>) { }

  ngOnInit() {
  }

  registerAuthUser(){
    this._reg.registerUser(this.registerUserData).subscribe(
      res =>  console.log(res),
      err => console.log(err)
    )
  }
  hideSignUpModal(){
    this.dialogBox.close();
  }
}
