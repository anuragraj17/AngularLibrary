import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import { catchError } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  loginUser(user: {}) {
    let _url : string = "http://localhost:8080/login";
    return this.http.post<any>(_url,user).pipe(
        catchError(this.errorHandler)
      );
  }
  errorHandler(error : HttpErrorResponse){
   return throwError(error.error.error || "server error");
  }
}
