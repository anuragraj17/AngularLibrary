import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from '@angular/http';
import { HttpClient,HttpClientModule} from '@angular/common/http';
import {RegisterService} from './service/RegisterService/register.service';
import {LoginService} from './service/LoginService/login.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './component/home/home.component';
import { ErrorComponent } from './GlobalError/error/error.component';
import { CustomErrorService } from './GlobalError/custom-error.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpModule,HttpClientModule,RegisterService,LoginService,
    {provide : ErrorHandler ,useClass : CustomErrorService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
