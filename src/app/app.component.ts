import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  userName : String;
  isUserLogIn : boolean;

  ngOnInit(): void {
    this.userName = window.localStorage.getItem("userName");
    this.isUserLogIn = this.userName != null; 
    console.log(this.isUserLogIn);
  }

  logOutAuthUser() {
     window.localStorage.removeItem("userName");
     this.userName = null;
     this.isUserLogIn  = false;
  }
  title = 'AngularLibrary';
}
