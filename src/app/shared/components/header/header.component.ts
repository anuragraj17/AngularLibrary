import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Output() toggleSideBarCheck : EventEmitter<any> =  new EventEmitter<any>();

  ngOnInit() {
  }
  toggleSideBar(){
    this.toggleSideBarCheck.emit();
  }
}
