import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
