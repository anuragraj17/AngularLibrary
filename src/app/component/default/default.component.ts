import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  sideBaropen = true;

  constructor() { }

  ngOnInit() {
  }

  sideBarToogler(){
    this.sideBaropen = !this.sideBaropen;
  }

}
