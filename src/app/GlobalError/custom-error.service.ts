import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CustomErrorService implements ErrorHandler{

  constructor(private injector : Injector) { }

  handleError(error : any){
    const router = this.injector.get(Router);
    console.log(`Requested Url :  ${router.url}`);

    if(error instanceof HttpErrorResponse){
      console.error('Backend  returned status code ', error.status);
      console.error( 'Error Message ' , error.message);
    } else {
      console.error(' An Error occured ', error.message);
    }

    router.navigate(['error']);
  }
}
