import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName : String;
  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.userName = window.localStorage.getItem("userName");
    console.log(this.userName);
  }

}
