import { Injectable } from '@angular/core';
import { HttpModule,Response,Headers} from '@angular/http';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http : HttpClient) { }

  registerUser(user){
    let _url : string = "http://localhost:8080/register";
    return this.http.post<any>(_url,user);
  }
}
