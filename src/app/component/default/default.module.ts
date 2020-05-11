import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';
import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from 'src/app/GlobalError/error/error.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RegisterService } from 'src/app/service/RegisterService/register.service';
import { LoginService } from 'src/app/service/LoginService/login.service';
import { CustomErrorService } from 'src/app/GlobalError/custom-error.service';
import { SharedModule } from 'src/app/shared/shared.module';
import {SidebarModule} from 'ng-sidebar'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    SidebarModule.forRoot()
  ],
  declarations: [
    DefaultComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    ErrorComponent,
  ],
  providers: 
  [HttpModule,HttpClientModule,RegisterService,LoginService,
      {provide : ErrorHandler ,useClass : CustomErrorService}
  ],
})
export class DefaultModule { }
