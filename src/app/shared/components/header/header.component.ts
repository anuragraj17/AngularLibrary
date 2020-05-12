import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog} from "@angular/material";
import { LoginComponent } from 'src/app/component/login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialouge : MatDialog) { }

  @Output() toggleSideBarCheck : EventEmitter<any> =  new EventEmitter<any>();

  ngOnInit() {
  }
  toggleSideBar(){
    this.toggleSideBarCheck.emit();
  }
  openSignIn(){
    this.dialouge.open(LoginComponent,{
      height: '600px',
      width: '800px'
    });
  }
}
