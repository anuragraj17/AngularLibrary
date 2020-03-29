import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ErrorComponent } from './GlobalError/error/error.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DefaultComponent } from './component/default/default.component';


const routes : Routes = [
  {
    path : '', component : DefaultComponent,
    children : [
      { path : '', component : DashboardComponent},
      { path : 'login', component : LoginComponent},
      { path : 'register', component : RegisterComponent },
      { path : 'home', component : HomeComponent },
      { path : 'error', component : ErrorComponent},
      { path : '**' , component : PageNotFoundComponent}
  ]
},
{ path : 'login', component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
