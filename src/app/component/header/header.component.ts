import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName : String;
  isUserLogIn : boolean;

  constructor() { }

  ngOnInit() {
    this.userName = window.localStorage.getItem("userName");
    this.isUserLogIn = this.userName != null; 
    console.log(this.isUserLogIn);
  }

  logOutAuthUser() {
    window.localStorage.removeItem("userName");
    this.userName = null;
    this.isUserLogIn  = false;
 }

}
